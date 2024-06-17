'use client'

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
// import axios from 'axios';

interface Entity {
    key: {
        primaryKey: string
    }
    uid: number,
    name: string,
    description: string,
    timezone: string,
    websiteUrl: {
        preferDisplayUrl: boolean,
        url: string
    }
}

const YextLocationData: React.FC = () => {
    const [data, setData] = useState<Entity[]>([])
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    
        useEffect(() => {
            const fetchContent = async () => {
                try {
                    const response = await fetch('/api/content', { 
                        method: 'GET',
                        headers: {
                            'content-type': "application/json"
                        } });
                        
                        if (!response.ok) {
                            throw new Error('Network response was not okay');
                            }
                    const result = await response.json();
                    // console.log(result);
                    const locInfo = result.data.response?.docs || [];
                    // console.log('Extracted Entities:', entities);
                    setData(locInfo);
                    setLoading(false);
                } catch (error: any) {
                    setError(error.message);
                setLoading(false);
                } 
            }
            fetchContent();
        },[]);
        

    return(
        <div className=''>
            <div className='items-center text-center mx-auto'>
                {loading && <div>loading...</div>}
                {error && <div>Error: {error}</div>}
                <ul className='block md:grid md:grid-cols-2 gap-4 place-content-center mx-auto'>
                    {data && 
                        data.map((entity) => (
                            <li key={entity.uid} className='mb-2 md:mb-0 bg-blue-800 text-center rounded-lg p-6 break-words'>
                                <Link className='hover:text-blue-400 text-base text-slate-300' href={`/projects/yext/content/${entity.uid}`} target="_blank" rel="noopener noreferrer">
                                    <h3 >{entity.name}</h3>
                                    <p className='text-xs' >{entity.timezone}</p>
                                    <p className='text-lg mb-2 mt-2' >{entity.description}</p>
                                </Link>
                            </li>
                        ))}
                </ul> 
            </div>
        </div>
    )
}

export default YextLocationData;