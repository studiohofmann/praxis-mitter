import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'
import Image from 'next/image'
import { HOME_QUERY } from '@/sanity/lib/queries'
import { HOME_QUERYResult } from '@/sanity.types'
import { PortableText } from 'next-sanity'

export default async function HeroImage() {
    const home = await client.fetch<HOME_QUERYResult>(HOME_QUERY)



    return (
        <div>
            {home.map((image) => (
                <div key={image._id}>
                    <div className='relative flex items-center justify-center h-[336px] w-full'>
                        <Image
                            src={urlFor(image.bild).url()}
                            alt="image"
                            fill
                            style={{ objectFit: 'cover' }}
                        />
                        <div className='absolute top-0 left-0 h-full w-full bg-breakerBay300 opacity-70' />
                        <div className='absolute px-4'>
                            <h1 className='text-gimblet50'><PortableText value={image.bild.caption} /></h1>
                        </div>
                    </div>

                </div>
            ))}



        </div>
    );
}