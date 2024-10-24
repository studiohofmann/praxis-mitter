import { client } from '@/sanity/lib/client';
import { BLOG_QUERY } from '@/sanity/lib/queries';
import { BLOG_QUERYResult } from '@/sanity.types';
import { PortableText } from 'next-sanity';
import BlogPost from '@/components/*blog-post';

export default async function Kontakt() {
    const blog = await client.fetch<BLOG_QUERYResult>(BLOG_QUERY);

    return (
        <div className="px-4 py-16 bg-gimblet200">
            {blog.map((willkommen) => (
                <div key={willkommen._id} className='mb-6'>
                    <h1 className='mb-6'>{willkommen.ueberschriftNavigation}</h1>
                    {/* Check if willkomen.text is not null before passing it to PortableText */}
                    {willkommen.text ? (
                        <PortableText value={willkommen.text} />
                    ) : (
                        <p>No content available</p> // Fallback content if text is null
                    )}
                </div>
            ))}
            <BlogPost />
        </div>
    );
}

export const revalidate = 60;
