import { client } from '@/sanity/lib/client'
import { KONTAKT_QUERY } from '@/sanity/lib/queries'
import { KONTAKT_QUERYResult } from '@/sanity.types'
import { PortableText } from 'next-sanity'
import Anfahrt from '@/components/anfahrt'
import Formular from '@/components/formular'
import { InstagramOutlined, PhoneOutlined, WhatsAppOutlined } from '@ant-design/icons';

export default async function Kontakt() {
    const kontakt = await client.fetch<KONTAKT_QUERYResult>(KONTAKT_QUERY)
    return (
        <div>
            <div className="px-8 pt-48 pb-32 bg-norway300">
                {kontakt.map((item) => (
                    <div key={item._id} className='flex flex-col gap-8'>
                        <h2>{item.ueberschriftNavigation}</h2>

                        {/* FORMULAR */}
                        {item.textFormular && (
                            <PortableText value={item.textFormular} />
                        )}
                        <Formular />

                        {/* ICONS */}
                        {item.textIcons && (
                            <PortableText value={item.textIcons} />
                        )}

                        <div className='flex flex-col gap-4 w-2/3 ml-auto'>
                            <a href={process.env.NEXT_PUBLIC_PHONE_NUMBER as string} className='flex duration-300 ease-in-out'>
                                <div className='flex-1'>
                                    Anruf
                                </div>
                                <div className='flex-1'>
                                    <PhoneOutlined className='text-lg rotate-90 ml-3' />
                                </div>
                            </a>
                            <a href={process.env.NEXT_PUBLIC_WHATSAPP as string} target="_blank" rel="noreferrer noopener" className='flex duration-300 ease-in-out'>
                                <div className='flex-1'>
                                    WhatsApp
                                </div>
                                <div className='flex-1'>
                                    <WhatsAppOutlined className='text-lg ml-3' />
                                </div>
                            </a>
                            <a href={process.env.NEXT_PUBLIC_INSTAGRAM as string} target="_blank" rel="noreferrer noopener" className='flex duration-300 ease-in-out'>
                                <div className='flex-1'>
                                    Instagram
                                </div>
                                <div className='flex-1'>
                                    <InstagramOutlined className='text-lg ml-3' />
                                </div>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
            <Anfahrt />
        </div>
    );
}

export const revalidate = 60;
