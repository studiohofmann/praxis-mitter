import { client } from '@/sanity/lib/client'
import { TERMIN_QUERY } from '@/sanity/lib/queries'
import { TERMIN_QUERYResult } from '@/sanity.types'
import { PortableText } from 'next-sanity'
import { PhoneFilled } from '@ant-design/icons'
import { MailFilled } from '@ant-design/icons'
import { WhatsAppOutlined } from '@ant-design/icons';
import Link from 'next/link'

export default async function Termin() {
    const termin = await client.fetch<TERMIN_QUERYResult>(TERMIN_QUERY)

    return (
        <div className="px-4 py-16 bg-gimblet100">
            {termin.map((termin) => (
                <div key={termin._id}>
                    <h1 className='mb-8'>{termin.ueberschrift}</h1>
                    <div className='flex gap-4'>
                        <div className='flex-1'>
                            <PortableText value={termin.text} />
                        </div>
                        <div className='flex flex-1 flex-col gap-3 float-right'>
                            <Link href={'/'} className='bg-breakerBay300 px-3 text-neutral-700  py-2 rounded-sm shadow-md'><PhoneFilled className='pr-3' />Anruf</Link>
                            <Link href={'/'} className='bg-breakerBay300 px-3 text-neutral-700  py-2  rounded-sm shadow-md'><MailFilled className='pr-3' />Email</Link>
                            <Link href={'/'} className='bg-breakerBay300 px-3 text-neutral-700  py-2  rounded-sm shadow-md'><WhatsAppOutlined className='pr-3' />WhatsApp</Link>
                        </div>
                    </div>
                </div>
            ))}

        </div>
    );
}