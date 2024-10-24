import { client } from '@/sanity/lib/client'
import { TERMIN_QUERY } from '@/sanity/lib/queries'
import { TERMIN_QUERYResult } from '@/sanity.types'
import { PortableText } from 'next-sanity'
import { PhoneOutlined } from '@ant-design/icons'
import { MailOutlined } from '@ant-design/icons'
import { WhatsAppOutlined } from '@ant-design/icons';

export default async function Termin() {
    const termin = await client.fetch<TERMIN_QUERYResult>(TERMIN_QUERY)

    return (
        <div className="px-8 py-16 bg-avocado300 text-avocado600">
            {termin.map((termin) => (
                <div key={termin._id}>
                    <h2 className='mb-8'>{termin.ueberschrift}</h2>
                    <div className='mb-8'>
                        {termin.text && (
                            <PortableText value={termin.text} />
                        )}

                    </div>
                    <div className='flex flex-col gap-4 w-2/3 float-right '>


                        <a href={process.env.NEXT_PUBLIC_PHONE_NUMBER as string} className='flex text-avocado600 hover:text-avocado800 border-avocado600 hover:border-avocado800 duration-300 ease-in-out'>
                            <div className='flex-1'>
                                Anruf
                            </div>
                            <div className='flex-1'>
                                <PhoneOutlined className='text-lg  rotate-90' />
                            </div>
                        </a>

                        <a href={process.env.NEXT_PUBLIC_EMAIL as string} className='flex text-avocado600 hover:text-avocado800 border-avocado600 hover:border-avocado800 duration-300 ease-in-out'>
                            <div className='flex-1'>
                                Email
                            </div>
                            <div className='flex-1'>
                                <MailOutlined className='text-lg' />
                            </div>
                        </a>

                        <a href={process.env.NEXT_PUBLIC_WHATSAPP as string} target="_blank" className='flex text-avocado600 hover:text-avocado800 border-avocado600 hover:border-avocado800 duration-300 ease-in-out'>
                            <div className='flex-1'>
                                WhatsApp
                            </div>
                            <div className='flex-1'>
                                <WhatsAppOutlined className='text-lg' />
                            </div>
                        </a>


                    </div>
                    <div className='clear-both'></div>

                </div>
            ))}

        </div>
    );
}