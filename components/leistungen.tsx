import { client } from '@/sanity/lib/client'
import { LEISTUNGEN_QUERY } from '@/sanity/lib/queries'
import { LEISTUNGEN_QUERYResult } from '@/sanity.types'
import { PortableText } from 'next-sanity'

export default async function Leistungen() {
    const leistungen = await client.fetch<LEISTUNGEN_QUERYResult>(LEISTUNGEN_QUERY)

    return (
        <div className="px-4 py-16">

            {leistungen.map((jo) => (
                <div key={jo._id}>
                    <h1>{jo.ueberschrift}</h1>
                    <br />
                    <PortableText value={jo.text} />
                </div>
            ))}

        </div>
    );
}