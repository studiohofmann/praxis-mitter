"use client";

import { useEffect, useState } from 'react';
import { client } from '../sanity/lib/client';
import Link from 'next/link';

// Define the type for the props, including the toggleMenu function
type NavigationLinksProps = {
    toggleMenu?: () => void;  // Made toggleMenu optional as you may not need it
};

const NavigationLinks: React.FC<NavigationLinksProps> = ({ toggleMenu }) => {
    const [data, setData] = useState<Array<{ _id: string; ueberschriftNavigation: string | null; slug: string | null }>>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            // Modify the query to exclude certain ueberschriftNavigation values
            const query = `*[
              defined(ueberschriftNavigation) 
              && defined(slug) 
              && !(ueberschriftNavigation in ["Schwerpunkte", "Blog", "ExcludedTitle3"])
            ]{
              _id, ueberschriftNavigation, "slug": slug.current, reihenfolge
            } | order(reihenfolge asc)`;

            try {
                const result = await client.fetch(query);
                setData(result);
            } catch (err) {
                setError(err as Error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <>
            {data.map(item => (
                item.slug ? (
                    <Link key={item._id} href={`/${item.slug}`} onClick={toggleMenu} className='w-full md:inline md:w-auto duration-300 ease-in-out'>
                        {item.ueberschriftNavigation || 'Untitled'}
                    </Link>
                ) : (
                    <span key={item._id}>No link available</span>
                )
            ))}
        </>
    );
};

export default NavigationLinks;
