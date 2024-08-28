import { client } from '@/sanity/lib/client'
import { HOME_QUERY } from '@/sanity/lib/queries'
import { HOME_QUERYResult } from '@/sanity.types'
import { PortableText } from 'next-sanity'

export default async function Willkommen() {
    const home = await client.fetch<HOME_QUERYResult>(HOME_QUERY)

    return (
        <div className="px-4 py-16 bg-gimblet100">
            {home.map((willkommen) => (
                <div key={willkommen._id}>
                    <PortableText value={willkommen.text} />
                </div>
            ))}
        </div>
    );
}