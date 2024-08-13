import { client } from '@/sanity/lib/client'
import { UEBER_MICH_QUERY } from '@/sanity/lib/queries'
import { UEBER_MICH_QUERYResult } from '@/sanity.types'
import { PortableText } from 'next-sanity'
import { urlFor } from '@/sanity/lib/image'
import Image from 'next/image'



export default async function Uebermich() {
    const ueberMich = await client.fetch<UEBER_MICH_QUERYResult>(UEBER_MICH_QUERY)
    return (
        <div className="px-3">
            {ueberMich.map((willkommen) => (
                <div key={willkommen._id}>
                    <h1 className='pt-12'>{willkommen.ueberschriftNavigation}</h1>
                    <br />
                    <div className='relative h-96'>
                        <Image
                            className='pb-6'
                            src={urlFor(willkommen.bild).url()}
                            alt="image"
                            fill
                            style={{ objectFit: 'cover' }}
                        />
                    </div>
                    <PortableText value={willkommen.text} />
                </div>
            ))}
        </div>
    );
}
