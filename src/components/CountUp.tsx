import React, { useEffect, useState, useRef } from 'react';
import { useInView } from 'framer-motion';

interface CountUpProps {
  to: number;
  duration?: number; // in seconds
  suffix?: string;
  prefix?: string;
}

export const CountUp: React.FC<CountUpProps> = ({ to, duration = 1.8, suffix = '', prefix = '' }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = to;
    if (start === end) return;

    const totalMiliseconds = duration * 1000;
    const startTime = performance.now();

    const updateCount = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      if (elapsed > totalMiliseconds) {
        setCount(end);
        return;
      }

      const progress = elapsed / totalMiliseconds;
      // Ease out quad formula: t * (2 - t)
      const easedProgress = progress * (2 - progress);
      const currentCount = Math.round(start + (end - start) * easedProgress);
      
      setCount(currentCount);
      requestAnimationFrame(updateCount);
    };

    requestAnimationFrame(updateCount);
  }, [isInView, to, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};
