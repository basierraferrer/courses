import type {NextAuthConfig} from 'next-auth';
import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import {z} from 'zod';
import prisma from './lib/prisma';
import bcryptjs from 'bcryptjs';

export const authConfig: NextAuthConfig = {
  pages: {
    signIn: '/auth/login',
    newUser: '/auth/new-account',
  },
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({email: z.string().email(), password: z.string().min(6)})
          .safeParse(credentials);

        if (!parsedCredentials.success) {
          return null;
        }

        const {email, password} = parsedCredentials.data;

        //buscar correo
        const user = await prisma.user.findUnique({
          where: {email: email.toLocaleLowerCase()},
        });

        if (!user) {
          return null;
        }
        const {password: userPass, ...restUser} = user;

        // comparar contraseña
        if (!bcryptjs.compareSync(password, userPass)) {
          return null;
        }

        return {
          ...restUser,
        };
      },
    }),
  ],
  callbacks: {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    authorized({auth, request: {nextUrl}}) {
      const isLoggedIn = !!auth?.user;
      /*const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');
      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login page
      } else if (isLoggedIn) {
        return Response.redirect(new URL('/dashboard', nextUrl));
      }*/
      return isLoggedIn;
    },
    async jwt({token, user}) {
      if (user) {
        token.id = user.id;
        token.data = user;
      }
      return token;
    },
    async session({session, token}) {
      if (token.data) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        session.user = token.data as any;
      }
      return session;
    },
  },
};

export const {signIn, signOut, auth, handlers} = NextAuth(authConfig);
