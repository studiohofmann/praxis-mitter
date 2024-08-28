import { client } from '@/sanity/lib/client'
import { NAVIGATION_QUERY } from '@/sanity/lib/queries'
import { NAVIGATION_QUERYResult } from '@/sanity.types'
import Link from 'next/link'
import Logo from '../logo';

interface MenuePunkteProps {
    onLinkClick: () => void;
}

export default async function MenuePunkte({ onLinkClick }: MenuePunkteProps) {
    const navigation = await client.fetch<NAVIGATION_QUERYResult>(NAVIGATION_QUERY)

    return (

        <div className="flex flex-col gap-6 w-1/2">
            <Link href="/" className='' onClick={(e) => {
                e.preventDefault(); // Prevent the default link behavior
                window.location.href = "/"; // Navigate manually
                onLinkClick(); // Close the menu
            }}>
                <Logo />
            </Link>
        </div>


    );
}