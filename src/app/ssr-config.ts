// SSR Configuration and Optimization
export const SSR_CONFIG = {
  // Enable static optimization where possible
  staticOptimization: true,
  
  // Preload critical resources
  preloadResources: [
    'https://cdn.lordicon.com/lordicon.js',
    '/fonts', // Your custom fonts
  ],
  
  // Cache configurations for better SSR performance
  cacheConfig: {
    // Static pages can be cached longer
    staticPages: '1 hour',
    // Dynamic pages should have shorter cache
    dynamicPages: '5 minutes',
    // API routes cache
    apiRoutes: '30 seconds',
  },
  
  // Render optimization
  renderOptimization: {
    // Enable streaming for better perceived performance
    streaming: true,
    // Selective hydration
    selectiveHydration: true,
  }
};

// Helper function to determine if a page should use SSR
export function shouldUseSSR(pathname: string): boolean {
  const ssrPaths = [
    '/',
    '/posts',
    '/posts/',
    '/about',
    '/showcase',
    '/value'
  ];
  
  const dynamicPaths = [
    '/posts/'
  ];
  
  return ssrPaths.some(path => pathname.startsWith(path)) || 
         dynamicPaths.some(path => pathname.includes(path));
}

export default SSR_CONFIG;
