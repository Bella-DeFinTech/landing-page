import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { locales } from "./lang";

// 获取首选语言，类似于上面的代码或使用一个库
function getLocale(request: NextRequest): string {
  // 您可以在这里实现您的逻辑，例如检查 Accept-Language 头
  const acceptLanguage = request.headers.get("accept-language");
  // 假设您返回默认语言 'en-US'
  return "en-US";
}

export function middleware(request: NextRequest) {
  // 检查 URL 中是否有任何支持的语言
  const { pathname } = request.nextUrl;
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  // 如果路径中已有语言，则不重定向
  if (pathnameHasLocale) return;

  // 如果路径中没有语言，则获取首选语言并重定向
  const locale = getLocale(request);

  request.nextUrl.pathname = `/${locale}${pathname}`;
  // 例如：传入的请求是 /products
  // 新的 URL 现在是 /en-US/products
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    // "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
    "/((?!api|static|.*\\..*|_next).*)",
  ],
};
