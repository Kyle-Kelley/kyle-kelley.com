'use client'

import React, { useState, useEffect } from 'react';

interface Props {
  text: string[];
  delay: number;
  wordPause: number;
  className?: string;
}

const Typewriter: React.FC<Props> = ({ text, delay, wordPause, className }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (currentIndex < text.length && currentText.length < text[currentIndex].length) {
      timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + text[currentIndex][prevText.length]);
      }, delay);
    } else if (currentText.length === text[currentIndex].length) {
      timeout = setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % text.length);
        setCurrentText('');
      }, wordPause);
    }

    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, delay, text, wordPause]);

  return <h2 className={`${className} relative box-border typewriter`}>{currentText}</h2>;
};

export default Typewriter;
