import React, { useEffect, useRef } from 'react';
import './Fireworks.css';

class Particle {
  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.velocity = {
      x: (Math.random() - 0.5) * 12,
      y: (Math.random() - 0.5) * 12
    };
    this.alpha = 1;
    this.friction = 0.95;
    this.gravity = 0.2;
    this.size = Math.random() * 3 + 1;
    this.fadeSpeed = Math.random() * 0.02 + 0.01;
  }

  draw(ctx) {
    ctx.save();
    ctx.globalAlpha = this.alpha;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.restore();
  }

  update(isEnding = false) {
    this.velocity.x *= this.friction;
    this.velocity.y *= this.friction;
    this.velocity.y += this.gravity;
    this.x += this.velocity.x;
    this.y += this.velocity.y;
    if (isEnding) {
      this.alpha -= 0.1;
    } else {
      this.alpha -= this.fadeSpeed;
    }
    return this.alpha <= 0;
  }
}

class Firework {
  constructor(x, y, targetX, targetY, color) {
    this.x = x;
    this.y = y;
    this.targetX = targetX;
    this.targetY = targetY;
    this.color = color;
    this.speed = 3;
    this.angle = Math.atan2(targetY - y, targetX - x);
    this.velocity = {
      x: Math.cos(this.angle) * this.speed,
      y: Math.sin(this.angle) * this.speed
    };
    this.trail = [];
    this.trailLength = 8;
    this.size = 3;
    this.alpha = 1;
    this.isExploding = false;
  }

  draw(ctx) {
    ctx.save();
    ctx.globalAlpha = this.alpha;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();

    for (let i = 0; i < this.trail.length; i++) {
      const point = this.trail[i];
      const trailAlpha = (i / this.trail.length) * this.alpha;
      ctx.beginPath();
      ctx.arc(point.x, point.y, this.size * (i / this.trail.length), 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${this.color.slice(4, -1)}, ${trailAlpha})`;
      ctx.fill();
    }
    ctx.restore();
  }

  update(isEnding = false) {
    if (isEnding) {
      this.alpha -= 0.1;
      return this.alpha <= 0;
    }

    if (this.isExploding) {
      this.alpha -= 0.02;
      return this.alpha <= 0;
    }

    this.trail.push({ x: this.x, y: this.y });
    if (this.trail.length > this.trailLength) {
      this.trail.shift();
    }

    this.x += this.velocity.x;
    this.y += this.velocity.y;

    const distance = Math.hypot(this.targetX - this.x, this.targetY - this.y);
    if (distance < 5) {
      this.isExploding = true;
    }
    return false;
  }

  explode(particles) {
    for (let i = 0; i < 150; i++) {
      particles.push(new Particle(this.x, this.y, this.color));
    }
  }
}

const Fireworks = ({ isActive }) => {
  const canvasRef = useRef(null);
  const fireworksRef = useRef([]);
  const particlesRef = useRef([]);
  const animationRef = useRef(null);
  const isEndingRef = useRef(false);

  const cleanup = () => {
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext('2d');
      ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    }
    fireworksRef.current = [];
    particlesRef.current = [];
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
      animationRef.current = null;
    }
  };

  useEffect(() => {
    if (!isActive) {
      isEndingRef.current = true;
      return;
    }

    // Reset state when becoming active
    isEndingRef.current = false;
    cleanup();

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const colors = [
      '#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff',
      '#ff8800', '#8800ff', '#00ff88', '#ff0088', '#88ff00', '#0088ff',
      '#ff3333', '#33ff33', '#3333ff', '#ffff33', '#ff33ff', '#33ffff',
      '#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'
    ];

    const createFirework = () => {
      if (isEndingRef.current) return;
      const x = Math.random() * canvas.width;
      const y = canvas.height;
      const targetX = Math.random() * canvas.width;
      const targetY = Math.random() * (canvas.height / 2);
      const color = colors[Math.floor(Math.random() * colors.length)];
      fireworksRef.current.push(new Firework(x, y, targetX, targetY, color));
    };

    const animate = () => {
      if (!isActive && fireworksRef.current.length === 0 && particlesRef.current.length === 0) {
        cleanup();
        return;
      }

      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      if (!isEndingRef.current && Math.random() < 0.15) {
        createFirework();
      }

      // Update and filter fireworks
      fireworksRef.current = fireworksRef.current.filter(firework => {
        firework.draw(ctx);
        const shouldRemove = firework.update(isEndingRef.current);
        if (shouldRemove && !isEndingRef.current) {
          firework.explode(particlesRef.current);
        }
        return !shouldRemove;
      });

      // Update and filter particles
      particlesRef.current = particlesRef.current.filter(particle => {
        particle.draw(ctx);
        const shouldRemove = particle.update(isEndingRef.current);
        return !shouldRemove;
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cleanup();
    };
  }, [isActive]);

  return <canvas ref={canvasRef} className="fireworks-canvas" />;
};

export default Fireworks; 