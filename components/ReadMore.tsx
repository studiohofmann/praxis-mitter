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
            <button onClick={toggleReadMore} className="text-blue-500">
                {isExpanded ? 'Read Less' : 'Read More'}
            </button>
        </div>
    );
};

export default ReadMore;

