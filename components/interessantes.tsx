import { client } from '@/sanity/lib/client'
import { INTERESSANTES_QUERY } from '@/sanity/lib/queries'
import { INTERESSANTES_QUERYResult } from '@/sanity.types'
import { PortableText } from 'next-sanity'
import InteressantesPost from './interessantes-post'

export default async function Interessantes() {
    const interessantes = await client.fetch<INTERESSANTES_QUERYResult>(INTERESSANTES_QUERY)

    return (
        <div className="px-4 py-16 bg-gimblet50">
            {interessantes.map((interessantes) => (
                <div key={interessantes._id}>
                    <h1 className='mb-8'>{interessantes.ueberschrift}</h1>
                    <div className='mb-8'>
                        <PortableText value={interessantes.textOben} />
                    </div>
                    <InteressantesPost />
                    <div className=''>
                        <PortableText value={interessantes.textUnten} />
                    </div>
                </div>

            ))}

        </div>
    );
}