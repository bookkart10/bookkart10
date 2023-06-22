import NextAuth, { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import Credentials from "next-auth/providers/credentials";
import { compare, hash } from "bcrypt";
import axios from "axios";

const prisma = new PrismaClient();

export const NextAuthOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
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

        if (credentials?.for == "sign-in") {
          //if email or password is not present
          const formData = new FormData();
          formData.append("emailid",credentials.userId)
          formData.append("password",credentials.password)
          const user = await axios.post(process.env.NEXT_PUBLIC_API_URL+"login.php",formData)

          return {
            id: user.data.id,
            email: user.data.email!,
            image: user.data.profile_pic_url!,
            name: user.data.name!,
          }
        } else {
          const hashedPassword = await hash(credentials.password, 12);
          const user = await prisma.user.create({
            data: {
              mail_id: credentials.userId,
              username: "Test User",
              password: hashedPassword,
            },
          });

          return {
            id: user.id,
            email: user.mail_id!,
            image: user.profile_image!,
            name: user.username!,
          };
        }
      },
    }),
  ],
  pages: {
    signIn: "/sign-in",
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

const handler = NextAuth(NextAuthOptions);

export { handler as GET, handler as POST };
