import { client } from '@/sanity/lib/client'
import { MENUE_QUERY } from '@/sanity/lib/queries'
import { MENUE_QUERYResult } from '@/sanity.types'
import { PortableText } from 'next-sanity'
import Navigation from "./navigation";
import Link from 'next/link'
import { ArrowRightOutlined } from '@ant-design/icons';



export default async function Menue() {
    const menue = await client.fetch<MENUE_QUERYResult>(MENUE_QUERY)

    return (
        <main className="sticky top-0 z-10 bg-neutral-100">

            {menue.map((post) => (
                <div key={post._id}>
                    <div>
                        <div className="flex justify-between px-3 py-2 bg-white">

                            <Link href="/" className='flex items-center'>
                                Praxis Mitter
                            </Link>



                            <div className="flex items-center gap-4">
                                <div className='text-lime-600'>
                                    <PortableText value={post.termin} />
                                </div>
                                <ArrowRightOutlined className='text-lime-600' />

                                <Link href="hebv" >Termin</Link>
                            </div>
                        </div>
                        <Navigation />
                    </div>


                </div>
            ))}

        </main>
    );
}
