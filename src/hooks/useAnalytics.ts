import { useEffect } from 'react';

// Analytics hook - ready for Google Analytics integration
export const useAnalytics = () => {
  useEffect(() => {
    // Initialize analytics
    console.log('Analytics initialized');
    
    // Track page view
    const trackPageView = () => {
      // In production, replace with actual analytics tracking
      console.log('Page view tracked:', window.location.pathname);
    };

    trackPageView();

    // Track scroll depth
    let maxScroll = 0;
    const trackScrollDepth = () => {
      const scrollPercent = Math.round(
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      );
      
      if (scrollPercent > maxScroll) {
        maxScroll = scrollPercent;
        // Track milestone scrolls
        if ([25, 50, 75, 90].includes(scrollPercent)) {
          console.log(`Scroll depth: ${scrollPercent}%`);
        }
      }
    };

    window.addEventListener('scroll', trackScrollDepth);
    return () => window.removeEventListener('scroll', trackScrollDepth);
  }, []);

  const trackEvent = (eventName: string, properties?: Record<string, any>) => {
    // In production, replace with actual analytics tracking
    console.log('Event tracked:', eventName, properties);
  };

  return { trackEvent };
};