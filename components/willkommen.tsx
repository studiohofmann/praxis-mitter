import { client } from '@/sanity/lib/client';
import { HOME_QUERY } from '@/sanity/lib/queries';
import { HOME_QUERYResult } from '@/sanity.types';
import { PortableText } from 'next-sanity';

export default async function Willkommen() {
    const home = await client.fetch<HOME_QUERYResult>(HOME_QUERY);

    return (
        <div className="px-8 pt-80 pb-32 bg-norway300">
            {home.map((willkommen) => (
                <div key={willkommen._id}>
                    {/* Ensure willkommen.text is not null or undefined */}
                    {willkommen.text ? (
                        <PortableText value={willkommen.text} />
                    ) : (
                        <p>No content available</p>
                    )}
                </div>
            ))}
        </div>
    );
}
