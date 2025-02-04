import { Todo } from "@prisma/client";

const updateTodo = async (id: string, complete: boolean): Promise<Todo> => {
  const body = {
    complete,
  };

  const todo = await fetch(`/api/todos/${id}`, {
    method: "PUT",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());

  return todo;
};

const createTodo = async (description: string): Promise<Todo> => {
  const body = {
    description,
  };

  const todo = await fetch(`/api/todos`, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());

  return todo;
};

const deleteTodos = async (): Promise<void> => {
  await fetch("/api/todos", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
};

const apiTodos = {
  createTodo,
  deleteTodos,
  updateTodo,
};

export default apiTodos;
