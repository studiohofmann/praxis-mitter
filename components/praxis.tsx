import { client } from '@/sanity/lib/client'
import { UEBER_MICH_QUERY } from '@/sanity/lib/queries'
import { UEBER_MICH_QUERYResult } from '@/sanity.types'
import { PortableText } from 'next-sanity'
import { urlFor } from '@/sanity/lib/image'
import Image from 'next/image'



export default async function Praxis() {
    const ueberMich = await client.fetch<UEBER_MICH_QUERYResult>(UEBER_MICH_QUERY)
    return (
        <div className="px-4 py-16 bg-gimblet200">
            {ueberMich.map((philipp) => (
                <div key={philipp._id}>
                    <h1 className='mb-6'>{philipp.ueberschrift}</h1>
                    <div className='mb-6'>
                        <PortableText value={philipp.praxisText} />
                    </div>
                    {philipp.galerie.map((image) => (
                        <div key={image._id} className="relative flex flex-col gap-3">
                            <div className='mb-5'>
                                <Image
                                    src={urlFor(image).width(400).height(300).url()}
                                    alt=""
                                    width={400}
                                    height={300}
                                    className="object-cover w-full h-48 rounded-sm"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            ))
            }
        </div >
    );
}