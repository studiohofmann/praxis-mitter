import { client } from '@/sanity/lib/client';
import { BLOG_POST_QUERY } from '@/sanity/lib/queries';
import { BLOG_POST_QUERYResult } from '@/sanity.types';
import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image';
import { getImageDimensions } from '@sanity/asset-utils';
import ReadMore from '@/components/ReadMore';

export default async function BlogPost() {
    const blogPost = await client.fetch<BLOG_POST_QUERYResult>(BLOG_POST_QUERY);

    return (
        <div className='flex flex-col gap-6'>
            {blogPost.map((post) => (
                <div key={post._id} className='p-3 rounded-sm shadow-md bg-gimblet50'>
                    <div>
                        <h2 className='mb-3'>{post.ueberschrift}</h2>
                        <h3 className='mb-3'>{post.datum}</h3>
                    </div>

                    {/* Check if post.bild is defined and has a valid asset */}
                    {post.bild && post.bild.asset ? (
                        <Image
                            src={urlFor(post.bild).url() || ''} // Ensure it's a valid URL
                            alt="Blog Post Image"
                            width={getImageDimensions(post.bild)?.width || 0} // Fallback to 0 if width is null
                            height={getImageDimensions(post.bild)?.height || 0} // Fallback to 0 if height is null
                            placeholder="blur"
                            blurDataURL={urlFor(post.bild).width(24).height(24).blur(10).url() || ''}
                            sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw,40vw"
                            className='mb-3 rounded-sm'
                        />
                    ) : (
                        <div className='bg-gray-300 h-48 w-full rounded-sm flex items-center justify-center'>
                            <span>No image available</span> {/* Placeholder when no image is available */}
                        </div>
                    )}

                    <div className='mb-6'>
                        <ReadMore value={post.text || []} maxLines={3} /> {/* Fallback to an empty array */}
                    </div>

                    <div className='flex gap-3 items-center justify-center'>
                        {/* Check if post.autor and post.autor.user are not null before rendering */}
                        {post.autor?.user ? (
                            <>
                                <h3>von {post.autor.user.name}</h3>
                                <div className='rounded-full w-6'>
                                    {/* Check if post.autor.user.bild is defined before rendering Image */}
                                    {post.autor.user.bild && post.autor.user.bild.asset ? (
                                        <Image
                                            className='rounded-full'
                                            src={urlFor(post.autor.user.bild).url() || ''}
                                            alt="Author Image"
                                            width={getImageDimensions(post.autor.user.bild)?.width || 0}
                                            height={getImageDimensions(post.autor.user.bild)?.height || 0}
                                            placeholder="blur"
                                            blurDataURL={urlFor(post.autor.user.bild).width(24).height(24).blur(10).url() || ''}
                                            sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw,40vw"
                                        />
                                    ) : (
                                        <div className='bg-gray-300 h-6 w-6 rounded-full flex items-center justify-center'>
                                            <span>No image</span> {/* Placeholder when no image is available */}
                                        </div>
                                    )}
                                </div>
                            </>
                        ) : (
                            <h3>von Unknown Author</h3> // Fallback if author information is missing
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
}
