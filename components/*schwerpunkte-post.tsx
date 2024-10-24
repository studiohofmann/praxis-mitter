import { client } from '@/sanity/lib/client'
import { SCHWERPUNKTE_POST_QUERY } from '@/sanity/lib/queries'
import { SCHWERPUNKTE_POST_QUERYResult } from '@/sanity.types'
import { PortableText } from 'next-sanity'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { urlFor } from '@/sanity/lib/image'
import Image from 'next/image'
import { getImageDimensions } from '@sanity/asset-utils'

export default async function SchwerpunktePost() {
    const schwerpunktePost = await client.fetch<SCHWERPUNKTE_POST_QUERYResult>(SCHWERPUNKTE_POST_QUERY)

    return (
        <div className="">

            {schwerpunktePost.map((schwerpunkte) => (
                <div key={schwerpunkte._id}>
                    <div className='relative w-full h-24'>
                        <Image
                            src={urlFor(schwerpunkte.bild).url()}
                            alt="image"
                            fill
                            style={{ objectFit: 'cover' }}
                            className='rounded-t-sm'
                        />
                    </div>
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">

                            <AccordionTrigger>
                                {schwerpunkte.ueberschrift}
                            </AccordionTrigger>
                            <AccordionContent>
                                <PortableText value={schwerpunkte.text} />
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            ))}



        </div>
    );
}