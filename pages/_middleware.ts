import { NextRequest, NextResponse } from "next/server";

const PUBLIC_FILE = /\.(.*)$/;

export function middleware(request: NextRequest) {
  console.log(request.nextUrl);
  // console.log(request.nextUrl.);
  const shouldHandleLocale =
    !PUBLIC_FILE.test(request.nextUrl.pathname) &&
    !request.nextUrl.pathname.includes("/api/") &&
    !request.nextUrl.pathname.startsWith("/en") &&
    !request.nextUrl.pathname.startsWith("/de");
  // (request.nextUrl.locale === "default" || request.nextUrl.locale === "");

  console.log(
    `Running middleware.\nLocale: ${request.nextUrl.locale}.\nUrl: ${request.nextUrl.pathname}.\nShould handle: ${shouldHandleLocale}`
  );
  if (shouldHandleLocale) {
    const url = request.nextUrl.clone();
    const mm = `/de${request.nextUrl.pathname}`;
    console.log(mm);
    // url.pathname = mm;
    url.locale = "de";
    return NextResponse.redirect(url);
  }

  return undefined;
}
