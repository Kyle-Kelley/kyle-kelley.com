'use client'

import React, { useEffect, useState } from 'react';
// import axios from 'axios';

interface YextBioProps {
    className?: string
}

interface Photo {
    url: string;
    height: number;
    width: number;
}

interface Item {
    certifications: any[];  
    description: string;
    education: any[];       
    email?: string;         
    id: string;
    name: string;
    photo?: Photo;          
    services: any[];        
    title: string;
}

interface Section {
    id: string;
    items: Item[];
}

interface Entity {
    accountId: string;
    id: string;
    language: string;
    name: string;
    publish: boolean;
    sections: Section[];
}

interface ResponseData {
    accountId: string;
    id: string;
    language: string;
    name: string;
    publish: boolean;
    sections: Section[];
  }
  
  interface ApiResponse {
    data: {
      meta: {
        uuid: string;
        errors: any[];
      };
      response: ResponseData;
    };
  }


  

const YextBio: React.FC<YextBioProps> = ({ className }) => {
    const [data, setData] = useState<Item[]>([])
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
            const fetchBio = async () => {
                try {
                    const response = await fetch('/api/bio', { 
                        method: 'GET',
                        headers: {
                            'content-type': "application/json"
                        } });
                        
                        // const response = axios.get('https://api-sandbox.yext.com/v2/accounts/me/connectors/yext1/pushData?v=20210428&api_key=f71911d8bde0caac2f637cbf4c53286f')
                        if (!response.ok) {
                            throw new Error('Network response was not okay');
                            }

                    const result: ApiResponse = await response.json();
                    console.log(result);

                    const sections: Section[] = result.data.response.sections || [];
                    const items: Item[] = sections.reduce((acc: Item[], section: Section) => acc.concat(section.items), []);
                    console.log('Extracted Sections:', items);
                    setData(items);
                    setLoading(false);
                } catch (error: any) {
                    setError(error.message);
                setLoading(false);
                } 
            }
            fetchBio();
        },[]);
        

    return(
        <div className={className}>
            <div className='items-center text-center mx-auto'>
                {loading && <div>loading...</div>}
                {error && <div>Error: {error}</div>}
                <ul className='block md:grid md:grid-cols-2 gap-4 place-content-center mx-auto'>
                    {data.length > 0 && 
                        data.map((item) => (
                            <li key={item.id} className='mb-2 md:mb-0 bg-blue-800 flex flex-col justify-center text-center rounded-lg p-6 break-words'>
                                <h3 className='text-slate-300 text-4xl'>{item.name}</h3>
                                <h5 className='text-sm pt-2 pb-2 text-slate-300'>{item.title}</h5>
                                <p className='text-xl text-slate-300'>{item.description}</p>
                                {item.photo && (
                                    <img src={item.photo.url} alt={item.name} className='rotate-180 pt-2 pb-2 ' height={item.photo.height} width={item.photo.width} />
                                )}
                                {item.email && <a href={`mailto:${item.email}`} className='text-base text-slate-300 hover:text-slate-500'>Email: {item.email}</a>}
                            </li>
                        ))
                    }
                </ul> 
            </div>
        </div>
    )
}

export default YextBio;