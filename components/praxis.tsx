import { client } from '@/sanity/lib/client'
import { PRAXIS_QUERY } from '@/sanity/lib/queries'
import { PRAXIS_QUERYResult } from '@/sanity.types'
import { PortableText } from 'next-sanity'
import { urlFor } from '@/sanity/lib/image'
import Image from 'next/image'



export default async function Praxis() {
    const praxis = await client.fetch<PRAXIS_QUERYResult>(PRAXIS_QUERY)
    return (
        <div id="praxis" className="px-8 pt-16 pb-32 bg-avocado300 text-avocado600">
            {praxis.map((item: any) => (
                <div key={item._id} className='flex flex-col gap-8'>
                    <h2>{item.ueberschriftNavigation}</h2>
                    <div>
                        <PortableText value={item.text} />
                    </div>
                    <div className='flex flex-col gap-4'>
                        {item.galerie.map((image: any) => (
                            <div key={image._id}>
                                <div className='relative h-64'>
                                    {image && (
                                        <Image
                                            src={urlFor(image).url()}
                                            alt="image"
                                            fill
                                            style={{ objectFit: 'cover' }}
                                        />
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))
            }
        </div >
    );
}