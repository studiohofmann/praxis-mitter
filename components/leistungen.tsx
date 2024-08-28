import { client } from '@/sanity/lib/client'
import { LEISTUNGEN_QUERY } from '@/sanity/lib/queries'
import { LEISTUNGEN_QUERYResult } from '@/sanity.types'
import { PortableText } from 'next-sanity'
import LeistungenPost from './leistungen-post'

export default async function Leistungen() {
    const leistungen = await client.fetch<LEISTUNGEN_QUERYResult>(LEISTUNGEN_QUERY)

    return (
        <div className="px-4 py-16 bg-gimblet100">
            {leistungen.map((jo) => (
                <div key={jo._id} className='mb-6'>
                    <h1 className='mb-6'>{jo.ueberschrift}</h1>
                    <PortableText value={jo.text} />
                </div>
            ))}
            <LeistungenPost />
        </div>
    );
}