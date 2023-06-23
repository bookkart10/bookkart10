import NextAuth from "next-auth";
import { NextAuthOptions } from "../../../../../utils/nextAuth";

const handler = NextAuth(NextAuthOptions);

export { handler as GET, handler as POST };
