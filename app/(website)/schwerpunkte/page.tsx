import { client } from '@/sanity/lib/client'
import { SCHWERPUNKTE_QUERY } from '@/sanity/lib/queries'
import { SCHWERPUNKTE_QUERYResult } from '@/sanity.types'
import { PortableText } from 'next-sanity'
import SchwerpunktePost from '@/components/schwerpunkte-post'



export default async function Schwerpunkte() {
    const schwerpunkte = await client.fetch<SCHWERPUNKTE_QUERYResult>(SCHWERPUNKTE_QUERY)
    return (
        <div className="px-3">
            {schwerpunkte.map((willkommen) => (
                <div key={willkommen._id} className='pb-6'>
                    <h1 className='pt-12'>{willkommen.ueberschriftNavigation}</h1>
                    <br />
                    <PortableText value={willkommen.text} />
                </div>
            ))}
            <SchwerpunktePost />
        </div>
    );
}

export const revalidate = 60;
