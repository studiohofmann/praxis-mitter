import { client } from '@/sanity/lib/client'
import { SCHWERPUNKTE_POST_QUERY } from '@/sanity/lib/queries'
import { SCHWERPUNKTE_POST_QUERYResult } from '@/sanity.types'
import { PortableText } from 'next-sanity'

export default async function SchwerpunktePost() {
    const schwerpunktePost = await client.fetch<SCHWERPUNKTE_POST_QUERYResult>(SCHWERPUNKTE_POST_QUERY)

    return (
        <div className="">
            {schwerpunktePost.map((schwerpunkte) => (
                <div key={schwerpunkte._id} className='pb-12'>
                    <h2 className='pb-3'>{schwerpunkte.ueberschrift}</h2>
                    <PortableText value={schwerpunkte.text} />
                </div>
            ))}



        </div>
    );
}