import { useEffect, useRef, useState } from "react";

interface MousePosition {
  x: number;
  y: number;
}

export const InteractiveGradient = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);
  const animationRef = useRef<number>();

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }

      animationRef.current = requestAnimationFrame(() => {
        const rect = container.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        
        setMousePosition({ x: Math.max(0, Math.min(100, x)), y: Math.max(0, Math.min(100, y)) });
      });
    };

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => {
      setIsHovered(false);
      setMousePosition({ x: 50, y: 50 });
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  const gradientStyle = {
    background: `
      radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
        hsl(var(--primary) / ${isHovered ? 0.25 : 0.15}) 0%, 
        hsl(var(--primary) / ${isHovered ? 0.15 : 0.08}) 25%, 
        transparent 50%),
      radial-gradient(circle at ${100 - mousePosition.x}% ${100 - mousePosition.y}%, 
        hsl(var(--secondary) / ${isHovered ? 0.2 : 0.12}) 0%, 
        hsl(var(--secondary) / ${isHovered ? 0.1 : 0.06}) 30%, 
        transparent 60%),
      radial-gradient(circle at ${mousePosition.x * 0.8}% ${mousePosition.y * 1.2}%, 
        hsl(var(--accent) / ${isHovered ? 0.18 : 0.1}) 0%, 
        transparent 40%),
      linear-gradient(${mousePosition.x * 1.8}deg, 
        hsl(var(--primary) / 0.05) 0%, 
        hsl(var(--secondary) / 0.05) 50%, 
        hsl(var(--accent) / 0.05) 100%)
    `,
    transition: isHovered 
      ? 'background 0.3s cubic-bezier(0.4, 0, 0.2, 1)' 
      : 'background 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
    willChange: 'background',
  };

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 hidden md:block pointer-events-none z-10"
      style={gradientStyle}
    />
  );
};