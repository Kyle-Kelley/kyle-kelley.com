'use client'

import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Entity {
    id: string,
    title: string
}

const YextContent: React.FC = () => {
    const [data, setData] = useState<Entity[] | null>(null)
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
    //   const apiURL = `https://sbx-cdn.yextapis.com/v2/accounts/me/content/KylesContent?api_key=09d5abe69e856d20f8e6d98cdc75f78c?v=20240609`
      
    //    axios.get('https://api-sandbox.yext.com/v2/accounts/me/connectors/yext1/pushData?v=20210428&api_key=f71911d8bde0caac2f637cbf4c53286f', {
    //         headers: {
    //             'Authorization': `Bearer ${process.env.YEXT_API_KEY}`,
    //             'Content-Type': 'application/json'
    //         }
    //       })

    //new attempt url: https://api-sandbox.yext.com/v2/accounts/me/connectors/connectorOne/pushData?v=20210428&api_key=f71911d8bde0caac2f637cbf4c53286f
    axios.get('/api/content')
          .then(response => {
            setData(response.data.response.entities);
            setLoading(false);
          })
          .catch(error => {
            setError(error.message);
            setLoading(false);
          })
    },[])
    
        // useEffect(() => {
        //     const fetchContent = async () => {
        //         try {
        //             const response = await fetch('/api/content', { 
        //                 method: 'GET',
        //                 headers: {
        //                     'content-type': "application/json"
        //                 } });
        //             // const response = axios.get('https://api-sandbox.yext.com/v2/accounts/me/connectors/yext1/pushData?v=20210428&api_key=f71911d8bde0caac2f637cbf4c53286f')
        //             if (!response.ok) {
        //                 throw new Error('Network response was not okay');
        //             }
        //             const result = await response.json();
        //             setData(result);
        //             setLoading(false);
        //         } catch (error: any) {
        //             setError(error.message);
        //         setLoading(false);
        //         } 
        //     }
        //     fetchContent();
        // },[]);
        

    return(
        <div className='w-3/4'>
            <div className='w-3/4 flex items-center text-center'>
                {loading && <div>loading...</div>}
                {error && <div>Error: {error}</div>}
                <ul className='flex'>
                    {data && 
                        data.map(({id, title}) => (
                            <li key={id}>{title}</li>
                        ))}
                </ul> 
            </div>
        </div>
    )
}

export default YextContent;