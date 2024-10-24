import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'
import Image from 'next/image'
import { HOME_QUERY } from '@/sanity/lib/queries'
import { HOME_QUERYResult } from '@/sanity.types'
import { PortableText } from 'next-sanity'

export default async function BildSektion() {
    const home = await client.fetch<HOME_QUERYResult>(HOME_QUERY)

    return (
        <div className='h-[50vh] w-full'>
            {home.map((image) => (
                <div key={image._id} className='relative flex items-center justify-center h-full w-full'>
                    {/* Check if bildSektion is not null before using it */}
                    {image.bildSektion ? (
                        <Image
                            src={urlFor(image.bildSektion).url()} // Assuming urlFor handles null cases
                            alt="image"
                            fill
                            style={{ objectFit: 'cover' }}
                        />
                    ) : (
                        <div className='bg-gray-300 h-full w-full flex items-center justify-center'>
                            <span>No image available</span> {/* Placeholder when no image is available */}
                        </div>
                    )}
                    <div className='absolute top-0 left-0 h-full w-full bg-yuma200 opacity-75' />
                    <div className='absolute px-4'>
                        <h1 className='text-yuma50 text-4xl font-bold'>
                            {/* Check if caption is not null before passing it to PortableText */}
                            {image.bildSektion && image.bildSektion.caption ? (
                                <PortableText value={image.bildSektion.caption} />
                            ) : (
                                <span>No caption available</span> // Fallback content if caption is null
                            )}
                        </h1>
                    </div>
                </div>
            ))}
        </div>
    );
}
