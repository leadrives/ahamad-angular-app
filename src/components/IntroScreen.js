// IntroScreen.js
import React, { useState, useEffect } from 'react';
import './IntroScreen.css';

const TextType = ({ text, speed = 100, onComplete, className }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    } else if (currentIndex === text.length) {
      // Typing complete, hide cursor after a longer delay
      setTimeout(() => {
        setShowCursor(false);
        if (onComplete) onComplete();
      }, 500); // Wait 1 second before completing
    }
  }, [currentIndex, text, speed, onComplete]);

  // Cursor blinking effect
  useEffect(() => {
    if (showCursor) {
      const cursorInterval = setInterval(() => {
        setShowCursor(prev => !prev);
      }, 530);

      return () => clearInterval(cursorInterval);
    }
  }, [showCursor, currentIndex]);

  return (
    <div className={className}>
      {displayText}
      {currentIndex < text.length && <span className="typing-cursor">|</span>}
    </div>
  );
};

const IntroScreen = ({ onComplete }) => {
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  // Debug logging
  useEffect(() => {
    console.log('IntroScreen mounted!');
    return () => console.log('IntroScreen unmounted!');
  }, []);

  useEffect(() => {
    console.log('IntroScreen - isTypingComplete:', isTypingComplete, 'isVisible:', isVisible);
  }, [isTypingComplete, isVisible]);

  useEffect(() => {
    if (isTypingComplete) {
      // Wait 1 second after typing completes, then start fade out
      const fadeTimer = setTimeout(() => {
        setIsVisible(false);
        
        // Complete transition after fade animation
        const completeTimer = setTimeout(() => {
          onComplete();
        }, 800); // Match CSS transition duration (0.8s)
        
        return () => clearTimeout(completeTimer);
      }, 1000); // Wait 1 second before starting fade (reduced from 2000)
      
      return () => clearTimeout(fadeTimer);
    }
  }, [isTypingComplete, onComplete]);

  const handleTypingComplete = () => {
    setIsTypingComplete(true);
  };

  return (
    <div className={`intro-screen ${!isVisible ? 'fade-out' : ''}`}>
      <div className="intro-content">
        <TextType
          text="Mohamad Ahmad"
          speed={200}
          onComplete={handleTypingComplete}
          className="intro-text"
        />
      </div>
    </div>
  );
};

export default IntroScreen;
