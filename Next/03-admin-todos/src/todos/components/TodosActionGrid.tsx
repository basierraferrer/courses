'use client'

import { Todo } from "@prisma/client"
import { TodoItemAction } from "@/todos"
import { toggleTodoAction } from "../actions/todo-actions"



interface ITodosActionGridProps {
    todos?: Todo[]
}



export const TodosActionGrid = ({ todos }: ITodosActionGridProps) => {

    return (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            {
                todos?.map(item => <TodoItemAction key={item.id} todo={item} toggleTodo={toggleTodoAction} />)
            }
        </div>
    )
}
