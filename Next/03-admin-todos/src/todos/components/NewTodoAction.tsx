"use client";

import { FormEvent, useState } from "react";
import { IoTrashOutline } from "react-icons/io5";

import { createTodoAction, deleteTodosAction } from "../actions/todo-actions";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export const NewTodoAction = () => {
  const [description, setDescription] = useState("");
  const { data: session } = useSession();

  if (!session?.user) {
    redirect("/dashboard");
  }

  const onSubmit = async (evt: FormEvent) => {
    evt.preventDefault();
    if (description.trim().length === 0 || !session.user?.id) {
      return;
    }
    createTodoAction(description.trim(), session.user.id);
    setDescription("");
  };

  return (
    <form onSubmit={onSubmit} className="flex w-full">
      <input
        onChange={(e) => setDescription(e.target.value)}
        type="text"
        value={description}
        className="w-6/12 -ml-10 pl-3 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-sky-500 transition-all"
        placeholder="¿Qué necesita ser hecho?"
      />

      <button
        type="submit"
        className="flex items-center justify-center rounded ml-2 bg-sky-500 p-2 text-white hover:bg-sky-700 transition-all"
      >
        Crear
      </button>

      <span className="flex flex-1"></span>

      <button
        onClick={deleteTodosAction}
        type="button"
        className="flex items-center justify-center rounded ml-2 bg-red-400 p-2 text-white hover:bg-red-700 transition-all"
      >
        <IoTrashOutline size={20} />
        <span className="mr-2">Borrar completados</span>
      </button>
    </form>
  );
};
