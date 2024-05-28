import { authMiddleware } from "@clerk/nextjs";

// import { NextRequest } from "next/server";

export default authMiddleware({
  publicRoutes: ["/", "/livesports"],
});

// This function can be marked `async` if using `await` inside
// export function middleware(request: NextRequest) {
//   // return NextResponse.redirect(new URL('/home', request.url))
// }

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
