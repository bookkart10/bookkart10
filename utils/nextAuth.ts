import { AuthOptions } from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import Credentials from "next-auth/providers/credentials";
import { compare } from "bcrypt";

const prisma = new PrismaClient();

export const NextAuthOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    Credentials({
      credentials: {
        userId: {
          type: "text",
        },
        password: {
          type: "text",
        },
        for: {
          type: "text",
        },
      },
      type: "credentials",
      authorize: async (credentials, req) => {
        if (!credentials?.userId || !credentials.password) return null;

        const user = await prisma.user.findUnique({
          where: {
            mail_id: credentials.userId,
          },
        });

        //if user is not found in the database
        if (!user || !user.password) return null;

        //decrypt password
        const isValidPassword = await compare(
          credentials.password,
          user.password
        );

        //if is not valid password
        if (!isValidPassword) return null;

        return {
          id: user.id,
          email: user.mail_id!,
          image: user.profile_image!,
          name: user.username!,
        };
      },
    }),
  ],
  pages: {
    signIn: "/signin",
    // signOut: "/sign-out",
    // error: '/error', // Error code passed in query string as ?error=
    verifyRequest: "/verify-request", // (used for check email message)
    newUser: "/join/user", // New users will be directed here on first sign in (leave the property out if not of interest)
  },
  callbacks: {
    session: async ({ session, token }) => {
      if (session?.user) {
        session.user.id = token.uid;
      }
      return session;
    },
    jwt: async ({ user, token }) => {
      if (user) {
        token.uid = user.id;
      }
      return token;
    },
  },
  session: {
    strategy: "jwt",
  },
};
