// src/styles/animations.js
import { useState, useEffect, useRef } from 'react';

export function useScrollReveal(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.unobserve(node);
      }
    }, { threshold: Number(threshold) || 0.15 });
    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);
  return [ref, visible];
}

export function useCountUp(end, duration = 2000) {
  const [count, setCount] = useState(0);
  const [ref, visible] = useScrollReveal();
  useEffect(() => {
    if (!visible) return;
    let startTime;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [visible, end, duration]);
  return [ref, count];
}

export function useAutoplay(length, interval = 5000) {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % length), interval);
    return () => clearInterval(id);
  }, [length, interval]);
  return [index, setIndex];
}