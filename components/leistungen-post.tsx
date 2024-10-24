import { client } from '@/sanity/lib/client'
import { LEISTUNGEN_POST_QUERY } from '@/sanity/lib/queries'
import { LEISTUNGEN_POST_QUERYResult } from '@/sanity.types'
import { PortableText } from 'next-sanity'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"


export default async function LeistungenPost() {
    const leistungenPost = await client.fetch<LEISTUNGEN_POST_QUERYResult>(LEISTUNGEN_POST_QUERY)

    return (
        <div className='px-4'>
            {leistungenPost.map((post) => (
                <div key={post._id}>
                    <ul className='list-disc'>
                        <li className='font-bold'>
                            {post.ueberschrift}
                        </li>
                    </ul>
                    {/*
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger>{post.ueberschrift}</AccordionTrigger>
                            <AccordionContent>
                                <PortableText value={post.text} />
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    */}
                </div>
            ))}
        </div>
    );
}
