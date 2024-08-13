import { client } from '@/sanity/lib/client'
import { NAVIGATION_QUERY } from '@/sanity/lib/queries'
import { NAVIGATION_QUERYResult } from '@/sanity.types'
import Link from "next/link";

export default async function Navigation() {
    const navigation = await client.fetch<NAVIGATION_QUERYResult>(NAVIGATION_QUERY)

    return (
        <div className='flex flow-row justify-between bg-black text-white px-3 py-2'>
            {navigation.map((item) => (
                <div key={item._id}>
                    <Link href={item.slug}>{item.ueberschriftNavigation}</Link>
                </div>
            ))}
        </div>
    );
}
