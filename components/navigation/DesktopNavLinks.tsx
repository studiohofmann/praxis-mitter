import Link from 'next/link';

export default function DesktopNavLinks() {
    return (
        <ul className="absolute right-0 flex flex-row space-x-6">
            <li className="text-xl hover:text-blue-900 hover:font-semibold">
                <Link href="/">Home</Link>
                <Link href="/kontakt">KONTAKT</Link>
            </li>
            {/* Add other navigation links */}
        </ul>
    );
}