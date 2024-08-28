'use client';

import React, { useEffect, useState } from 'react';
import { fetchSanityNavigationData } from '@/lib/fetchSanityData'; // Import your fetch function
import Link from 'next/link';
import Logo from '../logo';

export interface MenuePunkteProps { // Make sure this interface is exported
    onLinkClick: () => void;
}


export default function MenuePunkte({ onLinkClick }: MenuePunkteProps) {
    const [navigation, setNavigation] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch data on component mount
        fetchSanityNavigationData().then((data) => {
            setNavigation(data);
            setLoading(false);
        }).catch((error) => {
            console.error('Failed to fetch navigation data:', error);
            setLoading(false);
        });
    }, []);

    if (loading) {
        return <p>Loading...</p>; // You can show a loading spinner or a placeholder here
    }

    return (

        <div className="flex flex-col gap-6 w-1/2">
            <Link href="/" onClick={(e) => {
                e.preventDefault();
                window.location.href = "/";
                onLinkClick();
            }}>
                <Logo />
            </Link>
            {navigation.map((item) => (
                <div key={item._id} className='bg-breakerBay200 px-3 text-neutral-700 py-2 rounded-sm shadow-md flex justify-center'>
                    <Link href={item.slug} className='text-neutral-700' onClick={(e) => {
                        e.preventDefault();
                        window.location.href = item.slug;
                        onLinkClick();
                    }}>
                        {item.ueberschriftNavigation}
                    </Link>
                </div>
            ))}
        </div>

    );
}