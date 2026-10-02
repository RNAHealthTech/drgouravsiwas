'use client';

import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade' | 'scale';
  delay?: number;
  duration?: number;
  threshold?: number;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
  style?: React.CSSProperties;
}

export default function ScrollReveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 800,
  threshold = 0.1,
  className = '',
  as = 'div',
  style = {},
}: ScrollRevealProps) {
  const [isRevealed, setIsRevealed] = useState(false);
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true);
          if (elementRef.current) {
            observer.unobserve(elementRef.current);
          }
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [threshold]);

  const getDirectionClass = () => {
    switch (direction) {
      case 'fade':
        return 'reveal-fade-in';
      case 'down':
        return 'reveal-slide-down';
      case 'left':
        return 'reveal-slide-left';
      case 'right':
        return 'reveal-slide-right';
      case 'scale':
        return 'reveal-scale-in';
      case 'up':
      default:
        return 'reveal-slide-up';
    }
  };

  const Component = as as any;

  const combinedClassName = `reveal ${getDirectionClass()} ${
    isRevealed ? 'reveal-active' : ''
  } ${className}`.trim();

  const customStyle: React.CSSProperties = {
    transitionDelay: `${delay}ms`,
    transitionDuration: `${duration}ms`,
    animationDelay: `${delay}ms`,
    animationDuration: `${duration}ms`,
    ...style,
  };

  return (
    <Component ref={elementRef as any} className={combinedClassName} style={customStyle}>
      {children}
    </Component>
  );
}
