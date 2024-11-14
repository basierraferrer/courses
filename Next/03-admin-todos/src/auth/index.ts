import prisma from "@/lib/prisma";
import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";

export const { handlers, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [GitHub,Google],
  session: { strategy: 'jwt' },
  callbacks: {
    async jwt({token}) {
      const dbUser = await prisma.user.findUnique({where: { email: token.email ?? 'no-email' }})
      token.roles = dbUser?.roles ?? ['no-roles'];
      token.id = dbUser?.id ?? 'no-uuid';
      return token;
    },

    async session({session, token}) {
      if(session && session.user){
        session.user.roles = token.roles;
        session.user.id = token.id;
      }
      return session;
    },
  }
});
