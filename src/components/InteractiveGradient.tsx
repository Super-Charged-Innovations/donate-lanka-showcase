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
        hsl(var(--primary) / ${isHovered ? 0.4 : 0.25}) 0%, 
        hsl(var(--primary) / ${isHovered ? 0.25 : 0.15}) 25%, 
        hsl(var(--primary) / ${isHovered ? 0.1 : 0.05}) 45%, 
        transparent 65%),
      radial-gradient(circle at ${100 - mousePosition.x}% ${100 - mousePosition.y}%, 
        hsl(var(--secondary) / ${isHovered ? 0.35 : 0.2}) 0%, 
        hsl(var(--secondary) / ${isHovered ? 0.2 : 0.12}) 30%, 
        hsl(var(--secondary) / ${isHovered ? 0.08 : 0.04}) 50%, 
        transparent 70%),
      radial-gradient(circle at ${mousePosition.x * 0.7 + 15}% ${mousePosition.y * 0.8 + 10}%, 
        hsl(var(--accent) / ${isHovered ? 0.3 : 0.18}) 0%, 
        hsl(var(--accent) / ${isHovered ? 0.15 : 0.08}) 35%, 
        transparent 55%),
      linear-gradient(${mousePosition.x * 2 + 45}deg, 
        hsl(var(--primary) / ${isHovered ? 0.12 : 0.08}) 0%, 
        hsl(var(--secondary) / ${isHovered ? 0.1 : 0.06}) 50%, 
        hsl(var(--accent) / ${isHovered ? 0.08 : 0.04}) 100%),
      conic-gradient(from ${mousePosition.x * 3.6}deg at ${mousePosition.x}% ${mousePosition.y}%, 
        hsl(var(--primary) / ${isHovered ? 0.15 : 0.08}) 0deg, 
        transparent 60deg, 
        hsl(var(--secondary) / ${isHovered ? 0.12 : 0.06}) 120deg, 
        transparent 180deg, 
        hsl(var(--accent) / ${isHovered ? 0.1 : 0.05}) 240deg, 
        transparent 300deg, 
        hsl(var(--primary) / ${isHovered ? 0.15 : 0.08}) 360deg)
    `,
    transform: `scale(${isHovered ? 1.02 : 1})`,
    transition: isHovered 
      ? 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)' 
      : 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
    willChange: 'background, transform',
  };

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 hidden md:block z-10"
      style={gradientStyle}
    />
  );
};