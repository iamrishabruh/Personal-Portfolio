import React from 'react';
import { Link } from 'react-scroll';

export default function Header() {
  return (
    <header className="bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col items-center text-center">
          <div className="w-40 h-40 rounded-full overflow-hidden mb-8">
            <img
              src="/profile.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
            I'm Rishabh Chouhan
          </h1>
          
          <h2 className="text-2xl text-gray-600 dark:text-gray-300 mb-8">
            Software Engineer & AI Innovator
          </h2>
          
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mb-12">
            Building scalable, AI-driven solutions in healthcare & finance
          </p>
          
          <div className="flex gap-4">
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              View Projects
            </Link>
            
            <a
              href="https://www.linkedin.com/in/rishabhchouhan"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </header>
  );
} 