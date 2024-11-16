import { NextResponse } from "next/server";
import * as yup from "yup";
import prisma from "@/lib/prisma";
import { getUserServerSession } from "@/auth/actions/auth-actions";

/**
 *
 *
 *
 * @param request
 * @returns
 */

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const take = Number(searchParams.get("take")) ?? 10;
  const skip = Number(searchParams.get("skip")) ?? 0;

  const user = await getUserServerSession();

  if (!user || !user.id) {
    return NextResponse.json("Unauthorized", { status: 401 });
  }

  if (isNaN(take)) {
    return NextResponse.json(
      {
        message: "Take value is not a number",
      },
      { status: 400 }
    );
  }
  if (isNaN(skip)) {
    return NextResponse.json(
      {
        message: "Skip value is not a number",
      },
      { status: 400 }
    );
  }

  const todos = await prisma.todo.findMany({
    where: {
      userId: user.id,
    },
    take,
    skip,
  });

  return new NextResponse(
    JSON.stringify({
      data: todos,
    }),
    { status: 200 }
  );
}

const postSchema = yup.object({
  description: yup.string().required(),
  complete: yup.boolean().optional().default(false),
});

export async function POST(request: Request) {
  const user = await getUserServerSession();

  if (!user || !user.id) {
    return NextResponse.json("Unauthorized", { status: 401 });
  }

  try {
    const { complete, description } = await postSchema.validate(
      await request.json()
    );

    const todo = await prisma.todo.create({
      data: {
        complete,
        description,
        userId: user.id,
      },
    });

    return NextResponse.json(todo);
  } catch (error) {
    return NextResponse.json(error, { status: 400 });
  }
}

export async function DELETE() {
  const user = await getUserServerSession();

  if (!user || !user.id) {
    return NextResponse.json("Unauthorized", { status: 401 });
  }

  try {
    const todo = await prisma.todo.deleteMany({
      where: {
        userId: user.id,
        complete: true,
      },
    });

    return NextResponse.json(todo);
  } catch (error) {
    return NextResponse.json(error, { status: 400 });
  }
}
