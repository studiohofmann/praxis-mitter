import { client } from '@/sanity/lib/client'
import { IMPRESSUM_QUERY } from '@/sanity/lib/queries'
import { IMPRESSUM_QUERYResult } from '@/sanity.types'
import { PortableText } from 'next-sanity'



export default async function Impressum() {
    const impressum = await client.fetch<IMPRESSUM_QUERYResult>(IMPRESSUM_QUERY)
    return (
        <div className="px-3">
            {impressum.map((willkommen) => (
                <div key={willkommen._id} className='pb-6'>
                    <h1 className='pt-12'>{willkommen.ueberschrift}</h1>
                    <br />
                    <PortableText value={willkommen.text} />
                </div>
            ))}

        </div>
    );
}

export const revalidate = 60;