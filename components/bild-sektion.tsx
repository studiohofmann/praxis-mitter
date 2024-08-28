import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'
import Image from 'next/image'
import { HOME_QUERY } from '@/sanity/lib/queries'
import { HOME_QUERYResult } from '@/sanity.types'
import { PortableText } from 'next-sanity'

export default async function BildSektion() {
    const home = await client.fetch<HOME_QUERYResult>(HOME_QUERY)

    return (
        <div className='bg-red-300 h-[50vh] w-full'>
            {home.map((image) => (
                <div key={image._id} className='relative flex items-center justify-center h-full w-full'>
                    <Image
                        src={urlFor(image.bildSektion).url()}
                        alt="image"
                        fill
                        style={{ objectFit: 'cover' }}
                    />
                    <div className='absolute top-0 left-0 h-full w-full bg-breakerBay500 opacity-75' />
                    <div className='absolute px-4'>
                        <h1 className='text-gimblet50 text-4xl font-medium'>
                            <PortableText value={image.bildSektion.caption} />
                        </h1>
                    </div>
                </div>
            ))}
        </div>
    );
}