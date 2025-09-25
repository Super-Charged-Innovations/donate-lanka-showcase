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
        
        console.log('Mouse position:', { x, y }); // Debug logging
        setMousePosition({ x: Math.max(0, Math.min(100, x)), y: Math.max(0, Math.min(100, y)) });
      });
    };

    const handleMouseEnter = () => {
      console.log('Mouse entered'); // Debug logging
      setIsHovered(true);
    };
    const handleMouseLeave = () => {
      console.log('Mouse left'); // Debug logging
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
        ${isHovered ? 'rgba(255, 215, 0, 0.6)' : 'rgba(255, 215, 0, 0.4)'} 0%, 
        ${isHovered ? 'rgba(255, 215, 0, 0.3)' : 'rgba(255, 215, 0, 0.2)'} 25%, 
        transparent 50%),
      radial-gradient(circle at ${100 - mousePosition.x}% ${100 - mousePosition.y}%, 
        ${isHovered ? 'rgba(220, 38, 127, 0.5)' : 'rgba(220, 38, 127, 0.3)'} 0%, 
        ${isHovered ? 'rgba(220, 38, 127, 0.25)' : 'rgba(220, 38, 127, 0.15)'} 30%, 
        transparent 60%),
      radial-gradient(circle at ${mousePosition.x * 0.8}% ${mousePosition.y * 1.2}%, 
        ${isHovered ? 'rgba(16, 185, 129, 0.4)' : 'rgba(16, 185, 129, 0.25)'} 0%, 
        transparent 40%),
      linear-gradient(${mousePosition.x * 1.8}deg, 
        rgba(255, 215, 0, 0.1) 0%, 
        rgba(220, 38, 127, 0.1) 50%, 
        rgba(16, 185, 129, 0.1) 100%)
    `,
    transition: isHovered 
      ? 'background 0.3s cubic-bezier(0.4, 0, 0.2, 1)' 
      : 'background 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
    willChange: 'background',
    border: '1px solid rgba(255, 255, 255, 0.1)', // Debug border
  };

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 hidden md:block z-10"
      style={gradientStyle}
    />
  );
};