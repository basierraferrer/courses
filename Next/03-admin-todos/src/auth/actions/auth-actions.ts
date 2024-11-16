import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { auth } from "@/auth";

export const getUserServerSession = async () => {
  const session = await auth();
  return session?.user;
};

/**
 * Try to get the user from db if the user no exists we create the user and return data for session
 * @param email enter by user
 * @param password enter by user
 * @returns user info
 */
export const signInEmailPassword = async (email: string, password: string) => {
  if (!email || !password) return null;

  const user = await prisma.user.findUnique({ where: { email } });

  if (!user) {
    const dbUser = createUser(email, password);
    return dbUser;
  }

  if (!bcrypt.compareSync(password, user.password ?? "")) {
    return null;
  }

  return user;
};

/**
 *  Create a new user in the DB
 * @param email enter by user
 * @param password enter by user
 * @returns user info created
 */
const createUser = async (email: string, password: string) => {
  const user = await prisma.user.create({
    data: {
      email,
      password: bcrypt.hashSync(password),
      name: email.split("@")[0],
    },
  });
  return user;
};
