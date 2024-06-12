'use client'

import React, { useState } from 'react';
import  InputState  from './InputState';
import DisplayState from './DisplayState';

const StateLifter: React.FC = () => {
    const [sharedState, setSharedState] = useState<string>('');

    return (
        <div className='mx-auto bg-blue-800 text-center mt-4 w-11/12 lg:w-3/4 text-center rounded-lg p-10'>
            <h2>State Lifting</h2>
            <DisplayState classname="pb-4" sharedState={sharedState} />
            <InputState sharedState={sharedState} setSharedState={setSharedState} />
        </div>
    )
};

export default StateLifter;