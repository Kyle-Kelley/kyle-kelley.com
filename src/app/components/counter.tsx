'use client'

import React, { useState, useEffect } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log(`Count is now ${count}`);
    },[count]);

    return (
        <div className='mx-auto text-center'>
            <h1>{count}</h1>
            <div className='grid grid-rows-3 gap-4 mt-10'>
                <button className='text-black hover:text-white p-2 bg-blue-400 hover:bg-blue-600 w-3/4 md:w-1/4 rounded-xl mx-auto row-span-1' onClick={() => setCount(count + 1)}>click me</button>
                <button className='text-black hover:text-white p-2 bg-blue-400 hover:bg-blue-600 w-3/4 md:w-1/4 rounded-xl mx-auto row-span-1' onClick={() => setCount(count - 1)}>no click me</button>
            </div>
        </div>
    )
}

export default Counter;