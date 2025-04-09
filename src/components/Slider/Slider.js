import React, { useState } from 'react';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import './Slider.css';

const Slider = ({ items, renderItem }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    }
    if (isRightSwipe) {
      prevSlide();
    }
    
    setTouchStart(null);
    setTouchEnd(null);
  };

  return (
    <div className="slider">
      <button 
        type="button"
        className="slider__button slider__button--left"
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        <ArrowBackIosIcon />
      </button>
      
      <div 
        className="slider__content"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {renderItem(items[currentIndex])}
      </div>
      
      <button 
        type="button"
        className="slider__button slider__button--right"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <ArrowForwardIosIcon />
      </button>
      
      <div className="slider__dots">
        {items.map((item, index) => (
          <button
            key={`dot-${item.name || index}`}
            type="button"
            className={`slider__dot ${index === currentIndex ? 'slider__dot--active' : ''}`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider; 