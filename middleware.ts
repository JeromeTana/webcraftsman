import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  
  // Add security headers for SSR
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('Referrer-Policy', 'origin-when-cross-origin');
  
  // Add cache headers for different route types
  const pathname = request.nextUrl.pathname;
  
  // Static assets and images - long cache
  if (pathname.startsWith('/_next/static/') || 
      pathname.match(/\.(jpg|jpeg|png|gif|svg|webp|ico)$/)) {
    response.headers.set('Cache-Control', 'public, max-age=31536000, immutable');
  }
  
  // API routes - short cache
  else if (pathname.startsWith('/api/')) {
    response.headers.set('Cache-Control', 'public, max-age=30, s-maxage=60');
  }
  
  // Dynamic pages with SSR - moderate cache
  else if (pathname.includes('/posts/') || pathname === '/posts') {
    response.headers.set('Cache-Control', 'public, max-age=300, s-maxage=600');
  }
  
  // Static pages - longer cache
  else if (pathname === '/' || pathname === '/about' || pathname === '/showcase') {
    response.headers.set('Cache-Control', 'public, max-age=3600, s-maxage=7200');
  }
  
  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};
