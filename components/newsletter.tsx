import { client } from '@/sanity/lib/client';
import { FOOTER_QUERY } from '@/sanity/lib/queries';
import { FOOTER_QUERYResult } from '@/sanity.types';
import { PortableText } from 'next-sanity';
import { Input } from "@/components/ui/input";
import { Button } from './ui/button';

export default async function Newsletter() {
    const newsletter = await client.fetch<FOOTER_QUERYResult>(FOOTER_QUERY);

    return (
        <div className='text-neutral-100 font-light mb-6'>
            {newsletter.map((item) => (
                <div key={item._id} className='mb-3'>
                    <h3 className='mb-3'>{item.newsletterUeberschriift}</h3>
                    {/* Check if newsletterText is not null before passing it to PortableText */}
                    {item.newsletterText ? (
                        <PortableText value={item.newsletterText} />
                    ) : (
                        <p>No content available</p> // Fallback content if newsletterText is null
                    )}
                </div>
            ))}
            <div className='flex gap-3'>
                <Input />
                <Button variant="outline">Button</Button>
            </div>
        </div>
    );
}
