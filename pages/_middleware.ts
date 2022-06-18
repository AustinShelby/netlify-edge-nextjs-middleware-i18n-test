import { NextRequest, NextResponse } from "next/server";

const PUBLIC_FILE = /\.(.*)$/;

export function middleware(request: NextRequest) {
  const shouldHandleLocale =
    !PUBLIC_FILE.test(request.nextUrl.pathname) &&
    !request.nextUrl.pathname.includes("/api/") &&
    request.nextUrl.locale === "default";

  console.log(
    `Running middleware.\nLocale: ${request.nextUrl.locale}.\nUrl: ${request.nextUrl.pathname}.\nShould handle: ${shouldHandleLocale}`
  );
  if (shouldHandleLocale) {
    const url = request.nextUrl.clone();
    url.pathname = `/de${request.nextUrl.pathname}`;
    return NextResponse.redirect(url);
  }

  return undefined;
}
