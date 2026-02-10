'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);
  const [displayText, setDisplayText] = useState('');
  const fullText = 'SKU';

  useEffect(() => {
    // Typewriter effect
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 200); 
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => {
      clearInterval(typingInterval);
      clearTimeout(timer);
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-dark-bg"
        >
          <div className="text-center">
            {/* Static Logo */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-4"
            >
              <h1 className="text-7xl font-bold text-cyan-primary mb-2">
                {displayText}
                <span className="animate-pulse">|</span>
              </h1>
             
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
