import { client } from '@/sanity/lib/client'
import { UEBER_MICH_QUERY } from '@/sanity/lib/queries'
import { UEBER_MICH_QUERYResult } from '@/sanity.types'
import { PortableText } from 'next-sanity'
import { urlFor } from '@/sanity/lib/image'
import Image from 'next/image'
import Praxis from '@/components/praxis'



export default async function Uebermich() {
    const ueberMich = await client.fetch<UEBER_MICH_QUERYResult>(UEBER_MICH_QUERY)
    return (
        <div>
            <div className="px-4 py-16 bg-gimblet100">
                {ueberMich.map((philipp) => (
                    <div key={philipp._id}>
                        <h1 className='mb-6'>{philipp.ueberschriftNavigation}</h1>
                        <div className='relative h-96 mb-6'>
                            {philipp.bild && (
                                <Image
                                    src={urlFor(philipp.bild).url()}
                                    alt="image"
                                    fill
                                    style={{ objectFit: 'cover' }}
                                    className='rounded-sm'
                                />
                            )}
                        </div>
                        <PortableText value={philipp.text} />
                    </div>
                ))}
            </div>
            <Praxis />
        </div>
    );
}

export const revalidate = 60;
