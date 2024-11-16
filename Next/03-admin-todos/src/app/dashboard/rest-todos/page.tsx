// Esto solo se usa asi porque no estamos usando fetch para las peticiones
export const dynamic = "force-dynamic";
export const revalidate = 0;

import prisma from "@/lib/prisma";
import { TodosGrid } from "../../../todos/components/TodosGrid";
import { NewTodo } from "@/todos";
import { getUserServerSession } from "@/auth/actions/auth-actions";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Rest TODOS",
  description: "TODOS list",
};

export default async function RestTodosPage() {
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
      <div className="w-full px-3 mx-5 mb-5">
        <NewTodo />
      </div>
      <TodosGrid todos={todos} />
    </div>
  );
}
