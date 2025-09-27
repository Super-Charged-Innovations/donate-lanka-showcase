import React from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
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

  const animationClass = `animate-${animation}`;
  const delayClass = delay > 0 ? `animation-delay-${delay}` : '';
  const durationClass = `animation-duration-${duration}`;

  return (
    <div
      ref={elementRef as React.RefObject<HTMLDivElement>}
      className={cn(
        'transition-all',
        !isVisible && 'opacity-0 translate-y-8',
        isVisible && animationClass,
        delayClass,
        durationClass,
        className
      )}
      style={{
        animationDelay: isVisible ? `${delay}ms` : undefined,
        animationDuration: `${duration}ms`,
      }}
    >
      {children}
    </div>
  );
};