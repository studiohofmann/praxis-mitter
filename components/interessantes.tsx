import { client } from '@/sanity/lib/client';
import { INTERESSANTES_QUERY } from '@/sanity/lib/queries';
import { INTERESSANTES_QUERYResult } from '@/sanity.types';
import { PortableText } from 'next-sanity';
import InteressantesPost from './*interessantes-post';
import Link from 'next/link';

export default async function Interessantes() {
    const interessantes = await client.fetch<INTERESSANTES_QUERYResult>(INTERESSANTES_QUERY);

    return (
        <div className="px-4 py-16 bg-gimblet200">
            {interessantes.map((interessantes) => (
                <div key={interessantes._id}>
                    <h1 className='mb-6'>{interessantes.ueberschrift}</h1>

                    {/* Ensure value is not null for PortableText */}
                    <div className='mb-6'>
                        <PortableText value={interessantes.textOben || []} /> {/* Provide a fallback to an empty array */}
                    </div>

                    <div className='mb-6'>
                        <InteressantesPost />
                    </div>

                    <div className='flex flex-col'>
                        <div className='mb-6'>
                            <PortableText value={interessantes.textUnten || []} /> {/* Provide a fallback to an empty array */}
                        </div>
                        <div />
                        <div>
                            <Link href='/blog' className='bg-breakerBay200 px-3 text-neutral-700 py-2 rounded-sm shadow-md float-right'>
                                Blog
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
