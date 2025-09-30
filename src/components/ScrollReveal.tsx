import React, { useEffect, useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { cn } from '@/lib/utils';

interface ScrollRevealProps {
  children: React.ReactNode;
  animation?: 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'scale-up' | 'zoom-in';
  delay?: number;
  duration?: number;
  className?: string;
  triggerOnce?: boolean;
  threshold?: number;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  animation = 'fade-up',
  delay = 0,
  duration = 600,
  className,
  triggerOnce = true,
  threshold = 0.1,
}) => {
  const { elementRef, isVisible } = useScrollAnimation({
    threshold,
    triggerOnce,
  });
  
  const prefersReducedMotion = useReducedMotion();
  const [shouldAnimate, setShouldAnimate] = useState(true);

  // Coordinate with page transitions
  useEffect(() => {
    const handlePageTransition = () => {
      setShouldAnimate(false);
      // Re-enable animations after page transition
      setTimeout(() => setShouldAnimate(true), 100);
    };

    window.addEventListener('pageTransition', handlePageTransition);
    return () => window.removeEventListener('pageTransition', handlePageTransition);
  }, []);

  // Respect reduced motion preference
  const effectiveAnimation = prefersReducedMotion ? 'fade-up' : animation;
  const effectiveDuration = prefersReducedMotion ? 200 : duration;
  const effectiveDelay = prefersReducedMotion ? 0 : delay;

  const animationClass = shouldAnimate ? `animate-${effectiveAnimation}` : '';
  const delayClass = effectiveDelay > 0 ? `animation-delay-${effectiveDelay}` : '';
  const durationClass = `animation-duration-${effectiveDuration}`;

  return (
    <div
      ref={elementRef as React.RefObject<HTMLDivElement>}
      data-scroll-reveal
      className={cn(
        'transition-all',
        !isVisible && 'opacity-0 translate-y-8',
        isVisible && shouldAnimate && animationClass,
        delayClass,
        durationClass,
        className
      )}
      style={{
        animationDelay: isVisible && shouldAnimate ? `${effectiveDelay}ms` : undefined,
        animationDuration: `${effectiveDuration}ms`,
        // Performance optimization
        willChange: isVisible && shouldAnimate ? 'transform, opacity' : 'auto',
      }}
    >
      {children}
    </div>
  );
};