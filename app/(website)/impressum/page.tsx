import { client } from '@/sanity/lib/client'
import { IMPRESSUM_QUERY } from '@/sanity/lib/queries'
import { IMPRESSUM_QUERYResult } from '@/sanity.types'
import { PortableText } from 'next-sanity'



export default async function Impressum() {
    const impressum = await client.fetch<IMPRESSUM_QUERYResult>(IMPRESSUM_QUERY)
    return (
        <div className="px-4 py-16 bg-gimblet500">
            {impressum.map((impr) => (
                <div key={impr._id}>
                    <h1 className='mb-6'>{impr.ueberschriftNavigation}</h1>
                    <PortableText value={impr.text} />
                </div>
            ))}

        </div>
    );
}

export const revalidate = 60;