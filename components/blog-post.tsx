import { client } from '@/sanity/lib/client'
import { BLOG_POST_QUERY } from '@/sanity/lib/queries'
import { BLOG_POST_QUERYResult } from '@/sanity.types'
import { PortableText } from 'next-sanity'
import { urlFor } from '@/sanity/lib/image'
import Image from 'next/image'
import { getImageDimensions } from '@sanity/asset-utils'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"


export default async function BlogPost() {
    const blogPost = await client.fetch<BLOG_POST_QUERYResult>(BLOG_POST_QUERY)

    return (
        <main className="">
            <ul>
                {blogPost.map((post) => (
                    <li key={post._id}>
                        <Card>
                            <CardHeader>
                                <CardTitle>{post.ueberschrift}</CardTitle>
                                <CardDescription>{post.datum}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Image
                                    src={urlFor(post.bild).url()}
                                    alt="hello"
                                    width={getImageDimensions(post.bild).width}
                                    height={getImageDimensions(post.bild).height}
                                    placeholder="blur"
                                    blurDataURL={urlFor(post.bild).width(24).height(24).blur(10).url()}
                                    sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw,40vw"
                                />
                                <div className='px-3 py-6'>
                                    <PortableText value={post.text} />
                                </div>
                            </CardContent>
                            <CardFooter className='flex gap-3 px-3 pb-6'>
                                <h3>von {post.autor.user.name}</h3>
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

                            </CardFooter>
                        </Card>
                    </li>
                ))}
            </ul>
        </main>
    );
}


