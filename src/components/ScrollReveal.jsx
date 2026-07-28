import React, { useEffect, useRef, useState } from 'react';

const ScrollReveal = ({ children, className = '', delay = 0, duration = 0.8, distance = '24px' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${className} transition-all ease-[cubic-bezier(0.16,1,0.3,1)]`}
      style={{
        transitionDuration: `${duration}s`,
        transitionDelay: `${delay}s`,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0px) scale(1)' : `translateY(${distance}) scale(0.98)`,
        filter: isVisible ? 'blur(0px)' : 'blur(6px)',
        willChange: 'opacity, transform, filter',
      }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
