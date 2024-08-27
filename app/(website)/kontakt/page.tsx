import { client } from '@/sanity/lib/client'
import { KONTAKT_QUERY } from '@/sanity/lib/queries'
import { KONTAKT_QUERYResult } from '@/sanity.types'
import { PortableText } from 'next-sanity'
import Anfahrt from '@/components/anfahrt'
import Formular from '@/components/formular'
import { InstagramFilled } from '@ant-design/icons';
import { PhoneFilled } from '@ant-design/icons'
import { MailFilled } from '@ant-design/icons'
import { WhatsAppOutlined } from '@ant-design/icons'
import Link from 'next/link'

export default async function Kontakt() {
    const kontakt = await client.fetch<KONTAKT_QUERYResult>(KONTAKT_QUERY)
    return (
        <div>
            <div className="px-4 pt-16">
                {kontakt.map((willkommen) => (
                    <div key={willkommen._id}>
                        <h1 className='pb-8'>{willkommen.ueberschriftNavigation}</h1>
                        <div className='pb-8'>
                            <PortableText value={willkommen.text} />
                        </div>
                    </div>

                ))}

                <div className='flex flex-1 flex-col gap-3 w-1/2 mb-8'>
                    <Link href={'/'} className='bg-breakerBay300 px-3 text-neutral-700  py-2 rounded-sm shadow-md'>
                        <PhoneFilled className='pr-3' />Anruf
                    </Link>
                    <Link href={'/'} className='bg-breakerBay300 px-3 text-neutral-700  py-2  rounded-sm shadow-md'>
                        <WhatsAppOutlined className='pr-3' />WhatsApp
                    </Link>
                    <Link href={'/'} className='bg-breakerBay300 px-3 text-neutral-700  py-2  rounded-sm shadow-md'>
                        <InstagramFilled className='pr-3' />Instagram
                    </Link>

                </div>
                <Formular />
            </div>
            <Anfahrt />
        </div>
    );
}

export const revalidate = 60;
