import { client } from '@/sanity/lib/client'
import { NAVIGATION_QUERY } from '@/sanity/lib/queries'
import { NAVIGATION_QUERYResult } from '@/sanity.types'
import Link from "next/link";

export default async function NavigationFooter() {
    const navigation = await client.fetch<NAVIGATION_QUERYResult>(NAVIGATION_QUERY)

    return (
        <div className=''>
            {navigation.map((item) => (
                <div key={item._id}>
                    <Link href={item.slug}><h3>{item.ueberschriftNavigation}</h3></Link>

                </div>
            ))}
            <h3><Link href="/impressum">Impressum</Link></h3>

        </div>
    );
}
