/**
 * Performance monitoring utilities for page transitions
 * Helps detect animation performance issues across browsers
 */

interface PerformanceMetrics {
  navigationStart: number;
  transitionDuration: number;
  fps: number;
  isLowPerformance: boolean;
}

class PerformanceMonitor {
  private metrics: PerformanceMetrics[] = [];
  private frameCount = 0;
  private lastFrameTime = 0;
  private animationId: number | null = null;

  /**
   * Monitor page transition performance
   */
  startMonitoring() {
    if (typeof window === 'undefined') return;

    const start = performance.now();
    
    const measureFPS = (currentTime: number) => {
      if (this.lastFrameTime) {
        const delta = currentTime - this.lastFrameTime;
        this.frameCount++;
        
        // Calculate FPS every second
        if (delta >= 1000) {
          const fps = Math.round((this.frameCount * 1000) / delta);
          this.frameCount = 0;
          this.lastFrameTime = currentTime;
          
          // Log if performance is poor (< 30 FPS)
          if (fps < 30 && import.meta.env.DEV) {
            console.warn(`⚠️ Low animation FPS detected: ${fps} FPS`);
          }
        }
      } else {
        this.lastFrameTime = currentTime;
      }
      
      this.animationId = requestAnimationFrame(measureFPS);
    };

    this.animationId = requestAnimationFrame(measureFPS);
  }

  stopMonitoring() {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
      this.animationId = null;
    }
  }

  /**
   * Log navigation metrics for debugging
   */
  logNavigationMetrics(routeName: string) {
    if (typeof window === 'undefined' || !import.meta.env.DEV) return;

    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    
    if (navigation) {
      console.log(`📊 Navigation Metrics for ${routeName}:`, {
        domContentLoaded: `${Math.round(navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart)}ms`,
        loadComplete: `${Math.round(navigation.loadEventEnd - navigation.loadEventStart)}ms`,
        totalTime: `${Math.round(navigation.loadEventEnd - navigation.fetchStart)}ms`
      });
    }
  }

  /**
   * Check if device is low-performance
   */
  isLowPerformanceDevice(): boolean {
    if (typeof navigator === 'undefined') return false;

    // Check device memory (if available)
    const memory = (navigator as any).deviceMemory;
    if (memory && memory < 4) return true;

    // Check hardware concurrency
    const cores = navigator.hardwareConcurrency;
    if (cores && cores < 4) return true;

    return false;
  }

  /**
   * Get browser info for debugging
   */
  getBrowserInfo() {
    if (typeof navigator === 'undefined') return 'Unknown';

    const ua = navigator.userAgent;
    let browser = 'Unknown';
    
    if (ua.includes('Chrome') && !ua.includes('Edge')) browser = 'Chrome';
    else if (ua.includes('Safari') && !ua.includes('Chrome')) browser = 'Safari';
    else if (ua.includes('Firefox')) browser = 'Firefox';
    else if (ua.includes('Edge')) browser = 'Edge';
    
    return browser;
  }
}

export const performanceMonitor = new PerformanceMonitor();