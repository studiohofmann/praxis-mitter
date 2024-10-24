import { client } from '@/sanity/lib/client';
import { INTERESSANTES_POST_QUERY } from '@/sanity/lib/queries';
import { INTERESSANTES_POST_QUERYResult } from '@/sanity.types';
import { PortableText } from 'next-sanity';
import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image';
import { getImageDimensions } from '@sanity/asset-utils';
import ReadMore from '@/components/ReadMore';

export default async function InteressantesPost() {
    const interessantes = await client.fetch<INTERESSANTES_POST_QUERYResult>(INTERESSANTES_POST_QUERY);

    // Check if interessantes is null or undefined
    if (!interessantes) {
        return <div>No content available.</div>; // Handle the case where data is not available
    }

    // Check if interessantes.bild is defined and is an image object
    const bild = interessantes.bild;
    const bildUrl = bild ? urlFor(bild).url() : '';

    return (
        <div className='p-3 rounded-sm shadow-md bg-gimblet50'>
            <div>
                <h2 className='mb-3'>{interessantes.ueberschrift}</h2>
                <h3 className='mb-3'>{interessantes.datum}</h3>
            </div>

            {bild && (
                <Image
                    src={urlFor(bild).url()}
                    alt="image"
                    fill
                    style={{ objectFit: 'cover' }}
                />
            )}

            <div className='mb-6'>
                <ReadMore value={interessantes.text || []} maxLines={3} /> {/* Fallback to an empty array */}
            </div>

            <div className='flex gap-3 items-center justify-center'>
                {interessantes.autor?.user ? ( // Check if autor and user are defined
                    <>
                        <h3>von {interessantes.autor.user.name}</h3>
                        <div className='rounded-full w-6'>
                            {interessantes.autor.user.bild && (
                                <Image
                                    src={urlFor(interessantes.autor.user.bild).url()}
                                    alt="image"
                                    fill
                                    style={{ objectFit: 'cover' }}
                                />
                            )}
                        </div>
                    </>
                ) : (
                    <h3>von Unknown Author</h3> // Fallback for unknown author
                )}
            </div>
        </div>
    );
}
