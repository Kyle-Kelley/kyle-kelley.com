'use client'

import React, { useEffect, useState } from 'react';
import YextLocationData from '@/app/components/YextLocationData';

// interface Entity {
//     key: {
//         primaryKey: string
//     }
//     uid: number,
//     name: string,
//     description: string,
//     timezone: string,
//     websiteUrl: {
//         preferDisplayUrl: boolean,
//         url: string
//     };

export async function Page({ params }: { params: { uid: string } }) {
    
    const locData = await fetch('/api/content').then((res) => res.json())
    console.log(locData)
    return (
        <div>
            <YextLocationData />
        </div>
    )
}