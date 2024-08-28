'use client';

import React, { useState } from 'react';
import { PortableText, PortableTextReactComponents } from 'next-sanity';

interface ReadMoreProps {
    value: any[]; // Adjust the type as per your Portable Text structure
    maxLines?: number;
}

const ReadMore: React.FC<ReadMoreProps> = ({ value, maxLines = 3 }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const toggleReadMore = () => setIsExpanded(!isExpanded);

    return (
        <div>
            <div className={isExpanded ? '' : 'line-clamp-3'}>
                <PortableText value={value} />
            </div>
            <div className='flex justify-center mt-3'>
                <button onClick={toggleReadMore} className="bg-breakerBay200 px-3 text-neutral-700  py-2 rounded-sm shadow-md">
                    {isExpanded ? 'weniger' : 'mehr'}
                </button>
            </div>
        </div>
    );
};

export default ReadMore;

