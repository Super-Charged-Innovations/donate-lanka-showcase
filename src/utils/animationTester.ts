/**
 * Animation testing utilities
 * Helps validate animation behavior across different scenarios
 */

/**
 * Test if CSS animations are supported
 */
export const supportsAnimations = (): boolean => {
  if (typeof window === 'undefined') return false;
  
  const element = document.createElement('div');
  const prefixes = ['animation', 'webkitAnimation', 'mozAnimation', 'oAnimation', 'msAnimation'];
  
  return prefixes.some(prefix => {
    return (element.style as any)[prefix] !== undefined;
  });
};

/**
 * Test if user prefers reduced motion
 */
export const prefersReducedMotion = (): boolean => {
  if (typeof window === 'undefined') return false;
  
  const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  return mediaQuery.matches;
};

/**
 * Test if device supports hardware acceleration
 */
export const supportsHardwareAcceleration = (): boolean => {
  if (typeof window === 'undefined') return false;
  
  const element = document.createElement('div');
  element.style.transform = 'translateZ(0)';
  return element.style.transform === 'translateZ(0)';
};

/**
 * Detect touch device for mobile testing
 */
export const isTouchDevice = (): boolean => {
  if (typeof window === 'undefined') return false;
  
  return (
    'ontouchstart' in window ||
    navigator.maxTouchPoints > 0 ||
    (navigator as any).msMaxTouchPoints > 0
  );
};

/**
 * Test page transition timing
 */
export const testTransitionTiming = async (
  navigateAction: () => void,
  expectedRoute: string
): Promise<{ duration: number; success: boolean }> => {
  const startTime = performance.now();
  
  return new Promise((resolve) => {
    navigateAction();
    
    const checkRoute = setInterval(() => {
      if (window.location.pathname === expectedRoute) {
        clearInterval(checkRoute);
        const duration = performance.now() - startTime;
        resolve({
          duration,
          success: duration < 1000 // Should complete within 1 second
        });
      }
    }, 50);
    
    // Timeout after 3 seconds
    setTimeout(() => {
      clearInterval(checkRoute);
      resolve({
        duration: performance.now() - startTime,
        success: false
      });
    }, 3000);
  });
};

/**
 * Log animation test results
 */
export const logAnimationCapabilities = () => {
  if (!import.meta.env.DEV) return;
  
  console.group('🎬 Animation Capabilities');
  console.log('CSS Animations:', supportsAnimations() ? '✅' : '❌');
  console.log('Hardware Acceleration:', supportsHardwareAcceleration() ? '✅' : '❌');
  console.log('Reduced Motion:', prefersReducedMotion() ? '⚠️ Enabled' : '✅ Disabled');
  console.log('Touch Device:', isTouchDevice() ? '📱 Yes' : '🖥️ No');
  console.groupEnd();
};