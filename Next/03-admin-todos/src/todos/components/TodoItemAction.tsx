'use client';

import { Todo } from "@prisma/client"
import style from './TodoItem.module.css';
import { IoCheckboxOutline, IoSquareOutline } from "react-icons/io5";
import { startTransition, useOptimistic } from "react";


interface ITodoItem {
    todo: Todo,
    toggleTodo: (id: string, complete: boolean) => Promise<Todo | void>
}

export const TodoItemAction = ({ todo, toggleTodo }: ITodoItem) => {
    const [todoOpt, toggleTodoOpt] = useOptimistic(todo, (state, newCompleteOptimistic: boolean) => ({ ...state, complete: newCompleteOptimistic }));
    const { complete, description, id, } = todoOpt;
    const handleToggle = async () => {
        try {
            startTransition(() => toggleTodoOpt(complete));
            await toggleTodo(id, !complete);
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (error) {
            startTransition(() => toggleTodoOpt(!complete));
        }
    };
    return (
        <div className={complete ? style.todoDone : style.todoPending}>
            <div className="flex flex-col sm:flex-row justify-start items-center gap-4 text-black">
                <div
                    className="flex p-2 rounded-md cursor-pointer hover:bg-opacity-60 bg-blue-100"
                    onClick={handleToggle}
                >
                    {complete ? (<IoCheckboxOutline size={20} />) : (
                        <IoSquareOutline size={20} />
                    )}
                </div>
                <div className="text-center sm:text-left">
                    {description}
                </div>
            </div>
        </div>
    )
}
