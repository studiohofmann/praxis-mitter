"use client"; // This marks the component as a Client Component

import { client } from '@/sanity/lib/client';
import NavigationLinks from './navigation-links';
import { FOOTER_QUERY } from '@/sanity/lib/queries';
import { FOOTER_QUERYResult } from '@/sanity.types';
import { NAVIGATION_QUERY } from '@/sanity/lib/queries';
import { NAVIGATION_QUERYResult } from '@/sanity.types';
import { PortableText, PortableTextReactComponents, PortableTextMarkComponentProps } from 'next-sanity';
import { InstagramOutlined, PhoneOutlined, MailOutlined, WhatsAppOutlined, EnvironmentOutlined } from '@ant-design/icons';
import Link from "next/link";
import { useState, useEffect } from 'react';

const customComponents: Partial<PortableTextReactComponents> = {
    marks: {
        link: ({ value, children }: PortableTextMarkComponentProps<any>) => {
            const target = value.href.startsWith('http') ? '_blank' : undefined;
            return (
                <a
                    href={value.href}
                    target={target}
                    rel={target === '_blank' ? 'noopener noreferrer' : undefined}
                    className="border-none px-0 py-0 text-juniper600 hover:text-juniper800 duration-300 ease-in-out"
                >
                    {children}
                </a>
            );
        },
    },
};

export default function Footer() {
    const [footer, setFooter] = useState<FOOTER_QUERYResult | null>(null);
    const [navigation, setNavigation] = useState<NAVIGATION_QUERYResult | null>(null);
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    // Fetch data on the client side
    useEffect(() => {
        const fetchFooter = async () => {
            const footerData = await client.fetch<FOOTER_QUERYResult>(FOOTER_QUERY);
            setFooter(footerData);
        };

        const fetchNavigation = async () => {
            const navigationData = await client.fetch<NAVIGATION_QUERYResult>(NAVIGATION_QUERY);
            setNavigation(navigationData);
        };

        fetchFooter();
        fetchNavigation();
    }, []);

    if (!footer || !navigation) return <p>Loading...</p>;

    return (
        <h3 className='px-4 pb-4 pt-16 bg-norway400 text-norway600'>
            {footer.map((item) => (
                <div key={item._id}>
                    <div className='flex gap-8 mb-8'>
                        <div className='flex-1 flex flex-col gap-8'>

                            <div className='flex flex-col gap-4'>
                                <b className='tracking-widest'>Adresse</b>
                                {/* Conditionally render PortableText if 'adresse' exists */}
                                {item.adresse && <PortableText value={item.adresse} />}


                                <a href={process.env.NEXT_PUBLIC_GOOGLE_MAPS as string} target="_blank" rel="noreferrer noopener" className='flex items-center duration-300 ease-in-out'>
                                    <div className='flex-1'>
                                        Karte
                                    </div>
                                    <div className='flex-1'>
                                        <EnvironmentOutlined className='ml-2 text-xl' />
                                    </div>
                                </a>
                            </div>



                            <div className='flex flex-col gap-4'>
                                <b className='tracking-widest'>Kontakt</b>
                                <div className='flex flex-col gap-4'>

                                    <a href={process.env.NEXT_PUBLIC_PHONE_NUMBER as string} className='flex items-center duration-300 ease-in-out'>
                                        <div className='flex-1'>
                                            Anruf
                                        </div>
                                        <div className='flex-1'>
                                            <PhoneOutlined className='text-xl rotate-90 ml-3' />
                                        </div>
                                    </a>
                                    <a href={process.env.NEXT_PUBLIC_EMAIL as string} className='flex items-center duration-300 ease-in-out'>
                                        <div className='flex-1'>
                                            Email
                                        </div>
                                        <div className='flex-1'>
                                            <MailOutlined className='text-xl ml-3' />
                                        </div>
                                    </a>
                                    <a href={process.env.NEXT_PUBLIC_WHATSAPP as string} target="_blank" rel="noreferrer noopener" className='flex items-center duration-300 ease-in-out'>
                                        <div className='flex-1'>
                                            WhatsApp
                                        </div>
                                        <div className='flex-1'>
                                            <WhatsAppOutlined className='text-xl ml-3' />
                                        </div>
                                    </a>
                                    <a href={process.env.NEXT_PUBLIC_INSTAGRAM as string} target="_blank" rel="noreferrer noopener" className='flex items-center duration-300 ease-in-out'>
                                        <div className='flex-1'>
                                            Instagram
                                        </div>
                                        <div className='flex-1'>
                                            <InstagramOutlined className='text-xl ml-3' />
                                        </div>
                                    </a>
                                </div>
                            </div>

                        </div>

                        <div className='flex-1 flex flex-col gap-8 -mb-4'>
                            <div className='flex  flex-col gap-4'>
                                <b className='tracking-widest'>
                                    Öffnungszeiten
                                </b>
                                {item.oeffnungszeiten && <PortableText value={item.oeffnungszeiten} />}
                            </div>

                            <div className='flex-1 flex flex-col gap-4'>
                                <b className='tracking-widest'>Menü</b>
                                {/* Pass the toggleMenu function to the NavigationLinks component */}
                                <NavigationLinks toggleMenu={toggleMenu} />
                            </div>
                        </div>

                    </div>

                    <div className='flex duration-300 ease-in-out'>

                        <div className='flex w-full justify-center'>
                            {(new Date().getFullYear())}&nbsp;
                            {/* Conditionally render PortableText if 'copyright' exists */}{item.copyright && <PortableText value={item.copyright} components={customComponents} />}
                        </div>

                    </div>
                </div>
            ))}
        </h3>
    );
}
