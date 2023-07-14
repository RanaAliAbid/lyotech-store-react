import { NextRequest, NextResponse } from 'next/server';
import { APP_HOST } from '../app.config';
import { SessionAccessMiddleware } from './middlewares/AuthMiddleware';
import { ApiMiddleware } from './middlewares/ApiMiddleware';
// import type { NextRequest } from 'next/server';

const PUBLIC_FILE = /\.(.*)$/;

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  // const res = NextResponse.next()

  if (
    request.nextUrl.pathname.startsWith('/_next') ||
    PUBLIC_FILE.test(request.nextUrl.pathname)
  ) {
    return;
  }

  await ApiMiddleware.validateUserAgent(request)

  if (request.nextUrl.locale === 'default') {
    const locale = request.cookies.get('NEXT_LOCALE')?.value || 'en';
    return NextResponse.redirect(
      new URL(
        `/${locale}${request.nextUrl.pathname}${request.nextUrl.search}`,
        request.url,
      ),
    );
  }

  const locale = request.cookies.get('lang')?.value ?? 'en';

  if(await SessionAccessMiddleware.isUserAuthenticated(request)) {
      return NextResponse.redirect(`${request.nextUrl.origin +"/"+ locale}`);
  }

  // return NextResponse.redirect(new URL(`/${locale}`, request.url));
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/:path*', '/checkout/:path*', '/wishlist/:path*'],
};
