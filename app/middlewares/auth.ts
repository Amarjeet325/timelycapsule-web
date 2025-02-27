import { NextRequestWithAuth, withAuth } from "next-auth/middleware";
import { NextFetchEvent, NextRequest, NextResponse } from "next/server";
import { checkPathStartsWith } from "./_utils";
import { MiddlewareFactory } from "./interface";

const publicPathStarts = [
  "/enter",
  "/join",
  "/blueprints",
  "/craft",
  "/explore",
  "/lost-in-time",
  "/treasure",
  "/tofs",
];
const adminPathStarts = ["/admin"];

// Add a list of all valid routes in your application
const validRoutes = [
  ...publicPathStarts,
  ...adminPathStarts,
  "/dashboard", // add all your valid routes here
  "/profile",
  "/settings",
  // etc...
];

const authMiddleware: MiddlewareFactory = (next) => {
  return async (request: NextRequest, _next: NextFetchEvent) => {
    const pathname = request.nextUrl.pathname;

    // Check if the path matches any valid route pattern
    const isValidRoute = validRoutes.some(
      (route) =>
        pathname === route || // exact match
        pathname.startsWith(`${route}/`), // subpath match
    );

    // If it's not a valid route, redirect to lost-in-time
    if (!isValidRoute) {
      return NextResponse.redirect(new URL("/lost-in-time", request.url));
    }

    // Handle public routes
    if (checkPathStartsWith(pathname, publicPathStarts)) {
      return next(request, _next);
    }

    const isAdminSection = checkPathStartsWith(pathname, adminPathStarts);

    return withAuth({
      callbacks: {
        authorized: ({ token }) => {
          if (!isAdminSection) {
            return !!token;
          }
          return token?.isAdmin === true;
        },
      },
      pages: {
        signIn: "/enter",
        error: "/error",
      },
    })(request as NextRequestWithAuth, _next);
  };
};

export default authMiddleware;
