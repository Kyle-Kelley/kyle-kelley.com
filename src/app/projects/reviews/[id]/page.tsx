import React from 'react';
import { getXataClient } from '../../../../../src/xata'; 
import Link from 'next/link';


const xata  = getXataClient();

export default async function View({ params }: { params: { slug: string } }) {
    
    const view =  await xata.db.friendviews.filter({ id: params.slug }).getFirst();

    return (
      <div className="w-full max-w-5xl mt-16 mx-auto bg-blue-800 rounded-xl p-10">
        <Link href="/projects/reviews/" className="text-3xl hover:text-black">
          &larr; Co-Worker Recognition
        </Link>
   
        <h1 className="text-3xl mt-2 mb-2">{params.slug}</h1>
        <p className="text-xl">{view?.reviewBody}</p>
      </div>
    );
  }