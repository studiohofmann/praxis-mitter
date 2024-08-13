import { client } from '@/sanity/lib/client'
import { KONTAKT_QUERY } from '@/sanity/lib/queries'
import { KONTAKT_QUERYResult } from '@/sanity.types'
import { PortableText } from 'next-sanity'



export default async function Anfahrt() {
    const kontakt = await client.fetch<KONTAKT_QUERYResult>(KONTAKT_QUERY)
    return (
        <div className="">
            {kontakt.map((anfahrt) => (
                <div key={anfahrt._id}>
                    <h1 className='pt-12'>{anfahrt.ueberschriftAnfahrt}</h1>
                    <br />
                    <PortableText value={anfahrt.textAnfahrt} />
                </div>
            ))}
        </div>
    );
}
