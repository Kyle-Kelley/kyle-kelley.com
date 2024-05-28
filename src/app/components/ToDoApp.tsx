'use client'

import React, { useState } from 'react';
import AddToDo from './AddToDo';
import ToDoList from './ToDoList';

interface ToDoAppProps {};

export interface ToDo {
    id: number;
    task: string;
}

const ToDoApp: React.FC<ToDoAppProps> = (props) => {
    const [todos, setTodos] = useState<ToDo[]>([])

    const addToDo = ( task: string) => {
        const newToDo: ToDo = { id: Date.now(), task };
        setTodos([...todos, newToDo])
    }

    return (
        <div className='mx-auto bg-blue-800 text-center mt-4 w-11/12 lg:w-3/4 text-center rounded-lg p-10'>
            <h2>ToDo App</h2>
            <AddToDo addToDo={addToDo}/>
            <ToDoList todos={todos} />
        </div>
    )

}

export default ToDoApp