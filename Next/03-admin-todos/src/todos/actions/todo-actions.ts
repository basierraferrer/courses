"use server";

import prisma from "@/lib/prisma";
import { Todo } from "@prisma/client";
import { revalidatePath } from "next/cache";

const sleep = (seconds: number) => {
  return new Promise((resolve) =>
    setTimeout(() => resolve(true), seconds * 1000)
  );
};

export const toggleTodoAction = async (
  id: string,
  complete: boolean
): Promise<Todo> => {
  await sleep(3);

  const todo = await prisma.todo.findFirst({ where: { id } });

  if (!todo) {
    throw `Todo with id ${id} not founded`;
  }

  const updatedTodo = await prisma.todo.update({
    where: { id },
    data: { complete },
  });

  revalidatePath("/dashboard/server-todos");

  return updatedTodo;
};

export const createTodoAction = async (
  description: string,
  userId: string
): Promise<Todo> => {
  if (!userId) {
    throw `We cant create a todo without user`;
  }

  const todo = await prisma.todo.create({
    data: {
      description,
      userId,
    },
  });

  revalidatePath("/dashboard/server-todos");

  return todo;
};

export const deleteTodosAction = async (): Promise<void> => {
  await prisma.todo.deleteMany({ where: { complete: true } });
  revalidatePath("/dashboard/server-todos");
};
