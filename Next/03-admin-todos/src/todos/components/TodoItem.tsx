'use client';

import { Todo } from "@prisma/client"
import style from './TodoItem.module.css';
import { IoCheckboxOutline, IoSquareOutline } from "react-icons/io5";


interface ITodoItem {
    todo: Todo,
    toggleTodo: (id: string, complete: boolean) => Promise<Todo | void>
}

export const TodoItem = ({ todo, toggleTodo }: ITodoItem) => {
    const { complete, description, id, } = todo;
    const handleToggle = () => toggleTodo(id, !complete);
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
