'use client'

import YextLocationData from '@/app/components/YextLocationData';
import { useParams } from 'next/navigation'



const  LocDataPage: React.FC = () => {
    const params = useParams();
    console.log('Params:',params)
    const uid  = params?.id;

    if (!uid) {
        return <div>UID parameter is missing</div>
    }

    const parsedUid = Array.isArray(uid) ? parseInt(uid[0], 10) : parseInt(uid, 10);

    if (isNaN(parsedUid)) {
      return <div>Invalid UID parameter</div>;
    }

    return (
        <div>
            <YextLocationData uid={parsedUid} />
        </div>
    )
}

export default LocDataPage;