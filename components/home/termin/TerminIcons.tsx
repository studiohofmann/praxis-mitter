'use client'

import { useEffect, useState } from 'react'
import { PhoneFilled, MailFilled, WhatsAppOutlined } from "@ant-design/icons"
import { client } from '@/sanity/lib/client'
import { ICONS_QUERY } from '@/sanity/lib/queries'

interface IconData {
    name: string
    wert: string
}

export default function TerminIcons() {
    const [icons, setIcons] = useState<IconData[]>([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchIcons = async () => {
            try {
                const data = await client.fetch(ICONS_QUERY)
                setIcons(data)
            } catch (error) {
                console.error('Error:', error)
            }
            setIsLoading(false)
        }
        fetchIcons()
    }, [])

    const iconConfig = {
        anruf: {
            icon: <PhoneFilled className="text-2xl" />,
            href: (wert: string) => `tel:${wert}`
        },
        email: {
            icon: <MailFilled className="text-2xl" />,
            href: (wert: string) => `mailto:${wert}`
        },
        whatsapp: {
            icon: <WhatsAppOutlined className="text-2xl" />,
            href: (wert: string) => `https://wa.me/+${wert}`
        },

    }

    if (isLoading) return <div>Loading...</div>

    return (
        <div className="flex gap-4 items-center">
            {icons.map((icon) => {
                const config = iconConfig[icon.name.toLowerCase() as keyof typeof iconConfig]
                if (!config) return null

                return (
                    <a
                        key={icon.name}
                        href={config.href(icon.wert)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 hover:text-blue-600 transition-colors"
                    >
                        {config.icon}
                        <span className="text-sm">{icon.name}</span>
                    </a>
                )
            })}
        </div>
    )
}