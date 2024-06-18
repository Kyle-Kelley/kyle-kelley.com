'use client'

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

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

interface YextContentByIdProps {
    uid: number;
  }

const YextLocationData: React.FC<YextContentByIdProps> = ({uid}) => {
    const [data, setData] = useState<Entity | null>(null)
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    
        useEffect(() => {
            const fetchContentByUid = async () => {
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
                    console.log(result);
                    const entities = result.data?.response?.docs;
                    console.log(entities)
                    if (!entities) {
                        throw new Error('Docs array is undefined');
                      }

                    const entity = entities.find((entity: Entity) => entity.uid === uid);
                    console.log('Entity:', entity);
                   
                    setData(entity || null);
                    setLoading(false);
                } catch (error: any) {
                    setError(error.message);
                setLoading(false);
                } 
            }
            fetchContentByUid();
        },[uid]);
        

    return(
        <div className='items-center text-center mx-auto'>
                {loading && <div className='mb-4 text-slate-300'>loading...</div>}
                {error && <div className='mb-4 text-slate-300'>Error: {error}</div>}
            {!loading && !error && 
                <div className='items-center text-center mx-auto w-3/4 p-4 bg-slate-400 rounded-xl'>
                        <div className="mb-2 md:mb-0 bg-blue-800 text-slate-300 flex flex-col justify-center text-center rounded-lg p-6 break-words">
                            <h1>{data?.name}</h1>
                            <span className='p-4'>
                                <p className='text-base'>
                                    Description: 
                                </p>
                                <p className='text-xl'>{data?.description}</p>
                            </span>
                            {data?.websiteUrl?.url && (
                                <Link className='text-base hover:text-slate-400' href={data?.websiteUrl.url} target="_blank" rel="noopener noreferrer">
                                    Find Us
                                </Link>
                            )}
                        </div>
                </div>
            }
        </div>
    )
}

export default YextLocationData;