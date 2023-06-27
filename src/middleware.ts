import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const PUBLIC_FILE = /\.(.*)$/;

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  // const res = NextResponse.next();

  if (
    request.nextUrl.pathname.startsWith('/_next') ||
    request.nextUrl.pathname.includes('/api/') ||
    PUBLIC_FILE.test(request.nextUrl.pathname)
  ) {
    return;
  }

  if (request.nextUrl.locale === 'default') {
    const locale = request.cookies.get('NEXT_LOCALE')?.value || 'en';

    return NextResponse.redirect(
      new URL(
        `/${locale}${request.nextUrl.pathname}${request.nextUrl.search}`,
        request.url
      )
    );
  }

  const locale = request.cookies.get('lang')?.value ?? 'en';

  return NextResponse.redirect(new URL(`/${locale}`, request.url));
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/profile/:path*', '/checkout/:path*', '/wishlist/:path*'],
};
