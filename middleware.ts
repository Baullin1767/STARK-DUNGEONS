import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['ru', 'en'],
  defaultLocale: 'ru',
  localePrefix: 'as-needed',
  localeDetection: false
});

export const config = {
  matcher: ['/', '/(ru|en)/:path*', '/((?!api|_next|_vercel|.*\\..*).*)']
};
