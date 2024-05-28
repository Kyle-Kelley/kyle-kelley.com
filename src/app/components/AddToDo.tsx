'use client'

import React, { ChangeEvent, FormEvent, useRef, useState, KeyboardEvent } from 'react';

interface AddToDoProps {
    addToDo: ( task: string ) => void
}



const AddToDo: React.FC<AddToDoProps> = ({ addToDo }) => {
    const [task, setTask] = useState<string>('');
    const inputRef = useRef<HTMLInputElement>(null);

    // const handleSubmit = (e: FormEvent) => {
    //     e.preventDefault;
    //     if(task.trim()) {
    //         addToDo(task);
    //         setTask('');
    //     }
    // }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTask(e.target.value)
    }

    const handleClick = (e: FormEvent) => {
        e.preventDefault();
        if (task.trim()) {
            addToDo(task);
            setTask('');
        }
    }

    const handleKeyDown = (e:KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            if (inputRef.current) {
                addToDo(inputRef.current.value);
                setTask('');
            }
        }
    } 

    return (
        <div className='grid grid-rows-3 gap-4 mt-10'>
            <input 
            type="text" 
            value={task} 
            ref={inputRef}
            onChange={handleChange} 
            onKeyDown={handleKeyDown}
            placeholder="Add a new task" 
            className='w-1/4 mx-auto rounded-xl text-black text-center'
            />
            <button onClick={handleClick} className="mx-auto text-black hover:text-white p-2 bg-blue-400 hover:bg-blue-600 w-3/4 md:w-1/4 rounded-xl mx-auto row-span-1" type="submit">Add</button>
      </div>
    )
}

export default AddToDo;

