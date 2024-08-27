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
            {ueberMich.map((philipp) => (
                <div key={philipp._id}>
                    <h1 className='pt-12'>{philipp.ueberschriftNavigation}</h1>
                    <br />
                    <div className='relative h-96'>
                        {philipp.bild && (
                            <Image
                                src={urlFor(philipp.bild).url()}
                                alt="image"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        )}
                    </div>
                    <PortableText value={philipp.text} />
                </div>
            ))}
        </div>
    );
}

export const revalidate = 60;
