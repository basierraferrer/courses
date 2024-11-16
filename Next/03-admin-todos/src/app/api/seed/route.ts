import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST() {
  await prisma.todo.deleteMany();
  await prisma.user.deleteMany();

  const user = await prisma.user.create({
    data: {
      name: "Test 1",
      email: "test1@example.com",
      password: bcrypt.hashSync("123456"),
      roles: ["admin", "client", "super-user"],
      todos: {
        createMany: {
          data: [
            { description: "Piedra del alma", complete: true },
            { description: "Piedra del tiempo" },
            { description: "Piedra de la realidad" },
            { description: "Piedra del espacio" },
          ],
        },
      },
    },
  });

  return new NextResponse(
    JSON.stringify({
      message: "Seed executed",
      user,
    }),
    { status: 200 }
  );
}
