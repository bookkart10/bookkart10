import type { DefaultUser } from "next-auth";
import { roles } from "@prisma/client";

declare module "next-auth" {
  interface User {
    id: string;
    image: string;
    email: string;
    name: string;
  }
  interface Session {
    user?: DefaultUser & {
      id: string;
    };
  }
}

declare module "next-auth/jwt/types" {
  interface JWT {
    uid: string;
  }
}