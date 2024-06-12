import React from 'react';

interface DisplayProps {
    classname: string
    sharedState: string,
}

const DisplayState: React.FC<DisplayProps> = ({ classname,sharedState}) => {
    return (
        <div className={classname}>
            <p>{sharedState}</p>
        </div>
    )
}

export default DisplayState