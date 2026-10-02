'use client';

import React, { useEffect, useRef, useState } from 'react';

interface CounterProps {
  endValue: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}

export default function Counter({
  endValue,
  duration = 2000,
  prefix = '',
  suffix = '',
  className = '',
}: CounterProps) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const containerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
          if (containerRef.current) {
            observer.unobserve(containerRef.current);
          }
        }
      },
      {
        threshold: 0.1,
      }
    );

    const currentRef = containerRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    let animationFrameId: number;
    const startTime = performance.now();

    const updateCount = (timestamp: number) => {
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const easeOutQuad = progress * (2 - progress);
      const currentValue = Math.floor(easeOutQuad * endValue);

      setCount(currentValue);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(updateCount);
      } else {
        setCount(endValue);
      }
    };

    animationFrameId = requestAnimationFrame(updateCount);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [hasStarted, endValue, duration]);

  return (
    <span ref={containerRef} className={className}>
      {prefix}
      {count}
      {suffix}
    </span>
  );
}
