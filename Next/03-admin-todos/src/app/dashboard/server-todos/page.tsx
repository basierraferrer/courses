// Esto solo se usa asi porque no estamos usando fetch para las peticiones
export const dynamic = "force-dynamic";
export const revalidate = 0;

import { getUserServerSession } from "@/auth/actions/auth-actions";
import prisma from "@/lib/prisma";
import { NewTodo, TodosActionGrid } from "@/todos";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Server TODOS",
  description: "TODOS list",
};

export default async function ServerTodosPage() {
  const user = await getUserServerSession();

  if (!user) {
    redirect("/dashboard");
  }

  const todos = await prisma.todo.findMany({
    where: { userId: user.id },
    orderBy: { description: "asc" },
  });

  return (
    <div>
      <span className="text-3xl mb-10">Server actions</span>
      <div className="w-full px-3 mx-5 mb-5">
        <NewTodo />
      </div>
      <TodosActionGrid todos={todos} />
    </div>
  );
}
