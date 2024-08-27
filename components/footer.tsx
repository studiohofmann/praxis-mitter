import { client } from '@/sanity/lib/client'
import { FOOTER_QUERY } from '@/sanity/lib/queries'
import { FOOTER_QUERYResult } from '@/sanity.types'
import { NAVIGATION_QUERY } from '@/sanity/lib/queries'
import { NAVIGATION_QUERYResult } from '@/sanity.types'
import { PortableText } from 'next-sanity'
import { InstagramFilled } from '@ant-design/icons';
import { PhoneFilled } from '@ant-design/icons'
import { MailFilled } from '@ant-design/icons'
import { WhatsAppOutlined } from '@ant-design/icons'
import Link from "next/link";



export default async function Footer() {
    const footer = await client.fetch<FOOTER_QUERYResult>(FOOTER_QUERY)
    const navigation = await client.fetch<NAVIGATION_QUERYResult>(NAVIGATION_QUERY)

    return (
        <h3 className='px-4 pb-2 pt-16 bg-gimblet200'>
            <div className='flex gap-3'>
                {footer.map((item) => (
                    <div key={item._id} className='bg-breakerBay200 flex-1 rounded-sm shadow-md px-3 py-3'>
                        <div className='font-bold mb-2'>Kontakt</div>
                        <div className=' mb-2'>
                            <PortableText value={item.adresse} />
                        </div>
                        <div className='flex gap-2 text-md'>
                            <Link href="/">
                                <InstagramFilled />
                            </Link>
                            <Link href="/">
                                <PhoneFilled />
                            </Link>
                            <Link href="/">
                                <MailFilled />
                            </Link>
                            <Link href="/">
                                <WhatsAppOutlined />
                            </Link>
                        </div>
                    </div>
                ))}

                {footer.map((item) => (
                    <div key={item._id} className='bg-breakerBay200 flex-1 rounded-sm shadow-md px-3 py-3'>
                        <div className='font-bold mb-2'>Öffnungszeiten</div>
                        <PortableText value={item.oeffnungszeiten} />
                    </div>
                ))}

                <div className='bg-breakerBay200 flex-1 rounded-sm shadow-md px-3 py-3'>
                    <div className='font-bold mb-2'>Navigation</div>
                    {navigation.map((item) => (
                        <div key={item._id}>

                            <Link href={item.slug}><h3>{item.ueberschriftNavigation}</h3></Link>

                        </div>
                    ))}
                    <h3><Link href="/impressum">Impressum</Link></h3>
                </div>
            </div>

            {footer.map((item) => (
                <div key={item._id} className='mt-8 flex flex-col items-center'>
                    <div className='flex'>
                        {(new Date().getFullYear())}&nbsp;
                        <PortableText value={item.copyright} />
                    </div>
                    <h3> <PortableText value={item.designDevelopment} /></h3>

                </div>
            ))}



        </h3>
    );
}