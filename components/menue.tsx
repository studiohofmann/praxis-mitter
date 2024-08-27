import { client } from '@/sanity/lib/client'
import { MENUE_QUERY } from '@/sanity/lib/queries'
import { MENUE_QUERYResult } from '@/sanity.types'
import { PortableText } from 'next-sanity'
import Link from 'next/link'
import { PhoneFilled } from '@ant-design/icons';
import Logo from "./logo"
import NavBar from './navigation/NavBar'



export default async function Menue() {
    const menue = await client.fetch<MENUE_QUERYResult>(MENUE_QUERY)

    return (
        <div className="sticky top-0 z-10 bg-gimblet200 shadow-md">
            {menue.map((post) => (
                <div key={post._id}>
                    <div className="flex justify-between px-4 py-4">
                        <Link href="/" className='w-1/6'>
                            <Logo />
                        </Link>
                        <div className='flex gap-4'>


                            <Link href="hebv" className='flex items-center gap-3 bg-breakerBay300 text-neutral-700 px-3  py-2 rounded-sm shadow-md' >
                                <PhoneFilled />
                                <PortableText value={post.termin} />
                            </Link>
                            <NavBar />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
