import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

import {
  DEFAULT_LOGIN_REDIRECT,
  apiAuthPrefix,
  authRoutes,
  publicRoutes,
} from "@/routes";

export default function middleware(req: NextRequest) {
  const { nextUrl } = req;
  const accessToken = req.cookies.get("accessToken")?.value || null;

  const isLoggedIn = !!accessToken;

  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
  const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
  const isAuthRoute = authRoutes.includes(nextUrl.pathname);

  if (isApiAuthRoute) {
    return null;
  }

  if (isAuthRoute && isLoggedIn) {
    return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
  } else if (isAuthRoute && !isLoggedIn) {
    return null;
  }

  if (!isLoggedIn && !isPublicRoute) {
    const callbackUrl = nextUrl.pathname + nextUrl.search;
    const encodedCallbackUrl = encodeURIComponent(callbackUrl);

    return Response.redirect(
      new URL(`/auth/login?callbackUrl=${encodedCallbackUrl}`, nextUrl)
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
