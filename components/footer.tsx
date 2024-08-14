import { client } from '@/sanity/lib/client'
import { FOOTER_QUERY } from '@/sanity/lib/queries'
import { FOOTER_QUERYResult } from '@/sanity.types'
import { PortableText } from 'next-sanity'
import Logo from "@/components/logo"
import NavigationFooter from "./navigation-footer";
import { InstagramFilled } from '@ant-design/icons';
import { PhoneFilled } from '@ant-design/icons'
import { MailFilled } from '@ant-design/icons'
import { WhatsAppOutlined } from '@ant-design/icons'
import { MapProvider } from '../app/providers/map-provider'
import { MapComponent } from '@/components/map'
import Newsletter from './newsletter'


export default async function Footer() {
    const footer = await client.fetch<FOOTER_QUERYResult>(FOOTER_QUERY)


    return (
        <div className='px-3 pb-3 pt-12 bg-neutral-800 text-neutral-100 font-light'>
            <Newsletter />

            <div className='flex justify-between mb-6'> {
                footer.map((item) => (
                    <div key={item._id} className=''>
                        <PortableText value={item.kontaktText} />
                    </div>
                ))}
                <div className=' flex gap-3 mb-6 text-xl font-black'>
                    <InstagramFilled />
                    <PhoneFilled />
                    <MailFilled />
                    <WhatsAppOutlined />
                </div>
            </div>


            <div className="flex justify-between mb-6">
                {footer.map((item) => (
                    <div key={item._id} className='flex-1'>
                        <PortableText value={item.adresse} />
                    </div>
                ))}
                <NavigationFooter />
            </div>

            {footer.map((item) => (
                <div key={item._id} className='mt-12 flex justify-between'>
                    <h3 className='flex'>
                        {(new Date().getFullYear())}&nbsp;
                        <PortableText value={item.copyright} />
                    </h3>
                    <h3> <PortableText value={item.designDevelopment} /></h3>

                </div>
            ))}



        </div>
    );
}