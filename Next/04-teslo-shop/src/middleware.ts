// import {cookies} from 'next/headers';
// import {NextRequest, NextResponse} from 'next/server';
// import {decrypt} from './lib/session';

// // 1. Specify protected and public routes
// const protectedRoutes = ['/profile', '/cart', '/checkout', '/orders'];
// const publicRoutes = ['/login', '/new-account', '/'];

// export default async function middleware(req: NextRequest) {
//   // 2. Check if the current route is protected or public
//   const path = req.nextUrl.pathname;
//   const isProtectedRoute = protectedRoutes.includes(path);
//   const isPublicRoute = publicRoutes.includes(path);

//   // 3. Decrypt the session from the cookie
//   const cookie = (await cookies()).get('session')?.value;
//   const session = await decrypt(cookie);

//   // 4. Redirect to /login if the user is not authenticated
//   if (isProtectedRoute && !session?.userId) {
//     return NextResponse.redirect(new URL('/auth/login', req.nextUrl));
//   }

//   // 5. Redirect to /dashboard if the user is authenticated
//   if (
//     isPublicRoute &&
//     session?.userId &&
//     !req.nextUrl.pathname.startsWith('/')
//   ) {
//     return NextResponse.redirect(new URL('/', req.nextUrl));
//   }

//   return NextResponse.next();
// }

export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};
