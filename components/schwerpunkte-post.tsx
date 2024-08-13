import { client } from '@/sanity/lib/client'
import { SCHWERPUNKTE_POST_QUERY } from '@/sanity/lib/queries'
import { SCHWERPUNKTE_POST_QUERYResult } from '@/sanity.types'
import { PortableText } from 'next-sanity'

export default async function SchwerpunktePost() {
    const schwerpunktePost = await client.fetch<SCHWERPUNKTE_POST_QUERYResult>(SCHWERPUNKTE_POST_QUERY)

    return (
        <main className="">
            {schwerpunktePost.map((willkommen) => (
                <div key={willkommen._id}>
                    {willkommen.ueberschrift}
                    <PortableText value={willkommen.text} />
                </div>
            ))}



        </main>
    );
}