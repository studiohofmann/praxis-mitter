import { client } from '@/sanity/lib/client'
import { INTERESSANTES_POST_QUERY } from '@/sanity/lib/queries'
import { INTERESSANTES_POST_QUERYResult } from '@/sanity.types'
import { PortableText } from 'next-sanity'
import { urlFor } from '@/sanity/lib/image'
import Image from 'next/image'
import { getImageDimensions } from '@sanity/asset-utils'
import ReadMore from '@/components/ReadMore';

export default async function InteressantesPost() {
    const interessantes = await client.fetch<INTERESSANTES_POST_QUERYResult>(INTERESSANTES_POST_QUERY)

    return (
        <div className='mb-8'>

            <div className='p-4 mb-8 rounded-sm shadow-md bg-gimblet100'>
                <div>
                    <h2 className='mb-2'>{interessantes.ueberschrift}</h2>
                    <h3 className='mb-4'>{interessantes.datum}</h3>
                </div>


                <Image
                    src={urlFor(interessantes.bild).url()}
                    alt="hello"
                    width={getImageDimensions(interessantes.bild).width}
                    height={getImageDimensions(interessantes.bild).height}
                    placeholder="blur"
                    blurDataURL={urlFor(interessantes.bild).width(24).height(24).blur(10).url()}
                    sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw,40vw"
                    className='mb-4 rounded-sm'
                />
                <div className='mb-4'>
                    <ReadMore value={interessantes.text} maxLines={3} />
                </div>


                <h3 className='mb-2'>von {interessantes.autor.user.name}</h3>
                <div className='rounded-full w-6'>
                    <Image
                        className='rounded-full'
                        src={urlFor(interessantes.autor.user.bild).url()}
                        alt="hello"
                        width={getImageDimensions(interessantes.autor.user.bild).width}
                        height={getImageDimensions(interessantes.autor.user.bild).height}
                        placeholder="blur"
                        blurDataURL={urlFor(interessantes.autor.user.bild).width(24).height(24).blur(10).url()}
                        sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw,40vw"

                    />
                </div>



            </div>

        </div>

    );
}
