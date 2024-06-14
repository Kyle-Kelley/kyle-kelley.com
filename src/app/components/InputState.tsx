import React, { ChangeEvent,useState } from 'react';

interface StateInputProps {
    sharedState: string,
    setSharedState: React.Dispatch<React.SetStateAction<string>>;
}

const StateInput: React.FC<StateInputProps> = ({sharedState, setSharedState}) => {
    const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
        setSharedState(e.target.value)
    };

    return (
        <div className='w-full' >
            <input className='rounded-xl p-2 text-center' placeholder='write something cool' type="text" value={sharedState} onChange={handleChange} />
        </div>
    )

};

export default StateInput