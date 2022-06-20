import { NextRequest, NextResponse } from "next/server";

const PUBLIC_FILE = /\.(.*)$/;

export function middleware(request: NextRequest) {
  console.log(
    `Running middleware.\nLocale: ${request.nextUrl.locale}.\nUrl: ${request.nextUrl.pathname}`
  );
  if (process.env.NODE_ENV === "development") {
    const shouldHandleLocale =
      !PUBLIC_FILE.test(request.nextUrl.pathname) &&
      !request.nextUrl.pathname.includes("/api/") &&
      request.nextUrl.locale === "default";

    if (shouldHandleLocale) {
      const url = request.nextUrl.clone();
      url.pathname = `/de${request.nextUrl.pathname}`;
      return NextResponse.redirect(url);
    }

    return undefined;
  } else {
    const shouldHandleLocale =
      !PUBLIC_FILE.test(request.nextUrl.pathname) &&
      !request.nextUrl.pathname.includes("/api/") &&
      !request.nextUrl.pathname.startsWith("/en/") &&
      request.nextUrl.pathname !== "/en" &&
      !request.nextUrl.pathname.startsWith("/de/") &&
      request.nextUrl.pathname !== "/de";
    if (shouldHandleLocale) {
      const url = request.nextUrl.clone();
      url.pathname = `/de${request.nextUrl.pathname}`;
      return NextResponse.redirect(url);
    }

    return undefined;
  }
}
