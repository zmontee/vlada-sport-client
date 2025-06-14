import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const protectedRoutes = ["/profile", "/courses/my", "/admin"];

export function middleware(request: NextRequest) {
  // if (
  //   protectedRoutes.some((route) => request.nextUrl.pathname.startsWith(route))
  // ) {
  //   // Store the original URL to redirect back after authentication
  //   const url = request.nextUrl.clone();
  //
  //   const authCheckUrl = new URL(
  //     `/auth-check?redirect=${encodeURIComponent(url.pathname)}`,
  //     request.url,
  //   );
  //
  //   // Redirect to a client-side auth check page
  //   return NextResponse.redirect(authCheckUrl);
  // }

  return NextResponse.next();
}

// export const config = {
//   matcher: ["/profile/:path*", "/courses/my/:path*", "/admin/:path*"],
// };
