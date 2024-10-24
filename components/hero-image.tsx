import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image';
import { HOME_QUERY } from '@/sanity/lib/queries';
import { HOME_QUERYResult } from '@/sanity.types';

export default async function HeroImage() {
    const home = await client.fetch<HOME_QUERYResult>(HOME_QUERY);

    return (
        <div className='h-[50vh] w-full'>
            {home.map((image) => (
                // Ensure image.bild is not null
                image.bild && (
                    <div key={image._id} className='relative flex items-center justify-center h-full w-full'>
                        <Image
                            src={urlFor(image.bild).url() || ''} // Fallback to an empty string
                            alt="image"
                            fill
                            style={{ objectFit: 'cover' }}
                        />
                        <div className='absolute top-0 left-0 h-full w-full bg-norway300 opacity-65' />
                    </div>
                )
            ))}
        </div>
    );
}
