import { client } from '@/sanity/lib/client'
import { BLOG_POST_QUERY } from '@/sanity/lib/queries'
import { BLOG_POST_QUERYResult } from '@/sanity.types'
import { PortableText } from 'next-sanity'
import { urlFor } from '@/sanity/lib/image'
import Image from 'next/image'
import { getImageDimensions } from '@sanity/asset-utils'
import ReadMore from '@/components/ReadMore';





export default async function BlogPost() {
    const blogPost = await client.fetch<BLOG_POST_QUERYResult>(BLOG_POST_QUERY)

    return (

        <div className='mb-16'>
            {blogPost.map((post) => (
                <div key={post._id} className='p-4 mb-8 rounded-sm shadow-md bg-gimblet100'>
                    <div>
                        <h2 className='mb-2'>{post.ueberschrift}</h2>
                        <h3 className='mb-4'>{post.datum}</h3>
                    </div>


                    <Image
                        src={urlFor(post.bild).url()}
                        alt="hello"
                        width={getImageDimensions(post.bild).width}
                        height={getImageDimensions(post.bild).height}
                        placeholder="blur"
                        blurDataURL={urlFor(post.bild).width(24).height(24).blur(10).url()}
                        sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw,40vw"
                        className='mb-4 rounded-sm'
                    />
                    <div className='mb-4'>


                        <ReadMore value={post.text} maxLines={3} />



                    </div>


                    <h3 className='mb-2'>von {post.autor.user.name}</h3>
                    <div className='rounded-full w-6'>
                        <Image
                            className='rounded-full'
                            src={urlFor(post.autor.user.bild).url()}
                            alt="hello"
                            width={getImageDimensions(post.autor.user.bild).width}
                            height={getImageDimensions(post.autor.user.bild).height}
                            placeholder="blur"
                            blurDataURL={urlFor(post.autor.user.bild).width(24).height(24).blur(10).url()}
                            sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw,40vw"

                        />
                    </div>



                </div>
            ))}
        </div>

    );
}


