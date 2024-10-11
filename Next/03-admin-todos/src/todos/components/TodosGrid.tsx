'use client'
import { Todo } from "@prisma/client"
import { TodoItem } from "./TodoItem"


import apiTodos from '@/todos/helpers/todos';
import { useRouter } from "next/navigation";


interface ITodosGridProps {
    todos?: Todo[]
}



export const TodosGrid = ({ todos }: ITodosGridProps) => {
    const router = useRouter();

    const toggleTodo = async (id: string, complete: boolean) => {
        const updatedTodo = await apiTodos.updateTodo(id, complete);
        console.log("**__** ~ toggleTodo ~ updatedTodo:", updatedTodo)
        router.refresh();
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            {
                todos?.map(item => <TodoItem key={item.id} todo={item} toggleTodo={toggleTodo} />)
            }
        </div>
    )
}
