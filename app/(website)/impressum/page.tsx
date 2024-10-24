import { client } from '@/sanity/lib/client'
import { IMPRESSUM_QUERY } from '@/sanity/lib/queries'
import { IMPRESSUM_QUERYResult } from '@/sanity.types'
import { PortableText, PortableTextReactComponents, PortableTextMarkComponentProps } from 'next-sanity'

const customComponents: Partial<PortableTextReactComponents> = {
    marks: {
        link: ({ value, children }: PortableTextMarkComponentProps<any>) => {
            const target = value.href.startsWith('http') ? '_blank' : undefined;
            return (
                <a
                    href={value.href}
                    target={target}
                    rel={target === '_blank' ? 'noopener noreferrer' : undefined}
                    className="border-none px-0 py-0"
                >
                    {children}
                </a>
            );
        },
    },
};



export default async function Impressum() {
    const impressum = await client.fetch<IMPRESSUM_QUERYResult>(IMPRESSUM_QUERY)
    return (
        <div className="px-8 pt-48 pb-32 text-norway300 bg-juniper500">
            {impressum.map((impr) => (
                <div key={impr._id} className='flex flex-col gap-8'>
                    <h2>{impr.ueberschriftNavigation}</h2>
                    {impr.text && (
                        <PortableText value={impr.text} components={customComponents} />
                    )}

                </div>
            ))}

        </div>
    );
}

export const revalidate = 60;