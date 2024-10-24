import { client } from '@/sanity/lib/client';
import { SCHWERPUNKTE_QUERY } from '@/sanity/lib/queries';
import { SCHWERPUNKTE_QUERYResult } from '@/sanity.types';
import { PortableText } from 'next-sanity';
import SchwerpunktePost from '@/components/schwerpunkte-post';

export default async function Schwerpunkte() {
    const schwerpunkte = await client.fetch<SCHWERPUNKTE_QUERYResult>(SCHWERPUNKTE_QUERY);

    return (
        <div className="px-4 py-16 bg-gimblet100">
            {schwerpunkte.map((willkommen) => (
                <div key={willkommen._id} className='mb-6'>
                    <h1 className='mb-6'>{willkommen.ueberschriftNavigation}</h1>
                    {/* Check if willkommen.text is not null before passing it to PortableText */}
                    {willkommen.text ? (
                        <PortableText value={willkommen.text} />
                    ) : (
                        <p>No content available</p> // Fallback content if text is null
                    )}
                </div>
            ))}
            <SchwerpunktePost />
        </div>
    );
}

export const revalidate = 60;

