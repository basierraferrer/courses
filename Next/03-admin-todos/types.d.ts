// nextauth.d.ts
import { DefaultSession, DefaultUser } from "next-auth";
import { JWT as JWTAuth } from "next-auth/jwt";

interface IUser extends DefaultUser {
    /**
     * Roles del usuario
     */
    roles?: string[];
    id: string;
    /**
     * Agregar nuevos campos de ser necesario
     */
}

declare module "next-auth" {
    // eslint-disable-next-line @typescript-eslint/no-empty-object-type
    interface User extends IUser {};
    
    interface Session {
        user?: User & DefaultSession["user"];
    }
}

declare module "next-auth/jwt" {
    // eslint-disable-next-line @typescript-eslint/no-empty-object-type
    interface JWT extends IUser, JWTAuth {}
}