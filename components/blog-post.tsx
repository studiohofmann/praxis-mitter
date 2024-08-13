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
                                    sizes="
            (max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,
            40vw"
                                />
                                <PortableText value={post.text} />
                            </CardContent>
                            <CardFooter>
                                <p>Card Footer</p>
                            </CardFooter>
                        </Card>
                    </li>
                ))}
            </ul>
        </main>
    );
}


