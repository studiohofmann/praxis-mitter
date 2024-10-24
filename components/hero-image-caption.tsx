import { client } from '@/sanity/lib/client'
import { HOME_QUERY } from '@/sanity/lib/queries'
import { HOME_QUERYResult } from '@/sanity.types'
import { PortableText } from 'next-sanity'

export default async function HeroImageCaption() {
    const home = await client.fetch<HOME_QUERYResult>(HOME_QUERY)

    return (
        <div className='absolute top-0 h-full px-8 text-right flex items-center justify-center'>
            {home.map((image) => (
                <div key={image._id} className=''>
                    <h1 className='text-norway100'>
                        {/* Check if image.bild exists and has a caption before rendering PortableText */}
                        {image.bild?.caption && (
                            <PortableText value={image.bild.caption} />
                        )}
                    </h1>
                </div>
            ))}
        </div>
    );
}
