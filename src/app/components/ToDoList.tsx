import React from 'react';
import { ToDo } from './ToDoApp';

interface ToDoListProps {
    todos: ToDo[]
};

const ToDoList: React.FC<ToDoListProps> = ({ todos }) => {
    return (
        <ul>
            {todos.map((todo) => (
                <li className="mx-auto mt-2 text-black p-2 bg-blue-200 break-words w-3/4 md:w-1/4 rounded-xl mx-auto row-span-1" key={todo.id}>{todo.task}</li>
            ))}
        </ul>
    )
}

export default ToDoList