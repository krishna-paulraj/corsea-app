import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  const isPath =
    path === "/login" ||
    path === "/signup" ||
    path === "/verifyemail" ||
    path === "/recreatePass";

  const token = request.cookies.get("token")?.value || "";

  if (!token && !isPath)
    return NextResponse.redirect(new URL("/signup", request.nextUrl));
  if (token && isPath)
    return NextResponse.redirect(new URL("/welcome", request.nextUrl));
}

export const config = {
  matcher: [
    "/",
    "/signup",
    "/login",
    "/welcome",
    "/verifyemail",
    "/recreatePass",
  ],
};
