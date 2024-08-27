import { client } from '@/sanity/lib/client'
import { BLOG_QUERY } from '@/sanity/lib/queries'
import { BLOG_QUERYResult } from '@/sanity.types'
import { PortableText } from 'next-sanity'
import BlogPost from '@/components/blog-post'



export default async function Kontakt() {
    const blog = await client.fetch<BLOG_QUERYResult>(BLOG_QUERY)
    return (
        <div className="px-4 pt-16">
            {blog.map((willkommen) => (
                <div key={willkommen._id} className='pb-12'>
                    <h1>{willkommen.ueberschriftNavigation}</h1>
                    <br />
                    <PortableText value={willkommen.text} />
                </div>
            ))}
            <BlogPost />
        </div>
    );
}

export const revalidate = 60;