'use client'

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
// import axios from 'axios';

interface Photo {
    url: string;
    height: number;
    width: number;
}

interface Item {
    certifications: any[];  // Update the type if the structure of certifications is known
    description: string;
    education: any[];       // Update the type if the structure of education is known
    email?: string;         // email is optional as it might not be present in all items
    id: string;
    name: string;
    photo?: Photo;          // photo is optional as it might not be present in all items
    services: any[];        // Update the type if the structure of services is known
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

const YextBio: React.FC = () => {
    const [data, setData] = useState<Entity[]>([])
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    // useEffect(() => {
    //   const apiURL = `https://api.yextapis.com/v2/accounts/me/content/test1?api_key=8d1247cbeff0ad1fde2cb67eac702be2?v=20240609`
      
    //    axios.get('https://api-sandbox.yext.com/v2/accounts/me/connectors/yext1/pushData?v=20210428&api_key=f71911d8bde0caac2f637cbf4c53286f', {
    //         headers: {
    //             'Authorization': `Bearer ${process.env.YEXT_API_KEY}`,
    //             'Content-Type': 'application/json'
    //         }
    //       })

    //new attempt url: https://api-sandbox.yext.com/v2/accounts/me/connectors/connectorOne/pushData?v=20210428&api_key=f71911d8bde0caac2f637cbf4c53286f
    // axios.get('/api/content')
    //       .then(response => {
    //         setData(response.data.response.entities);
    //         setLoading(false);
    //       })
    //       .catch(error => {
    //         setError(error.message);
    //         setLoading(false);
    //       })
    // },[])
    // https://cdn.yextapis.com/v2/accounts/me/bios/2271392?api_key=8d1247cbeff0ad1fde2cb67eac702be2&v=20240612
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
                    const result = await response.json();
                    console.log(result);
                    const entities = result.data.response || [];
                    console.log('Extracted Entities:', entities);
                    setData(entities);
                    setLoading(false);
                } catch (error: any) {
                    setError(error.message);
                setLoading(false);
                } 
            }
            fetchBio();
        },[]);
        

    return(
        <div className=''>
            <div className='items-center text-center w-3/4 mx-auto'>
                {loading && <div>loading...</div>}
                {error && <div>Error: {error}</div>}
                <ul className='grid grid-cols-2 gap-4 place-content-center mx-auto'>
                    {data.length > 0 && 
                        data.map((entity) => (
                            <li key={entity.id} className='bg-blue-800 text-center rounded-lg p-6 break-words'>
                                <h3 className='hover:text-white'>{entity.name}</h3>
                                {entity.sections.map(section => (
                                    <div key={section.id}>
                                        {section.items.map(item => (
                                            <div key={item.id}>
                                                <h4>{item.name}</h4>
                                                <p>{item.title}</p>
                                                <p>{item.description}</p>
                                                {item.photo && (
                                                    <img src={item.photo.url} alt={item.name} height={item.photo.height} width={item.photo.width} />
                                                )}
                                                {item.email && <p>Email: {item.email}</p>}
                                                <p>Certifications: {item.certifications.join(', ')}</p>
                                                <p>Education: {item.education.join(', ')}</p>
                                                <p>Services: {item.services.join(', ')}</p>
                                            </div>
                                        ))}
                                    </div>
                                ))}
                            </li>
                        ))
                    }
                </ul> 
            </div>
        </div>
    )
}

export default YextBio;