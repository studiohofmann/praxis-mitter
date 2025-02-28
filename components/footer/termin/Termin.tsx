import { client } from '@/sanity/lib/client'
import { PortableText } from '@portabletext/react'
import { TERMIN_QUERY } from '@/sanity/lib/queries'
import { Termin as TerminType } from '@/sanity.types'
import TerminIcons from "./TerminIcons"

async function getData() {
    try {
        const data = await client.fetch<TerminType[]>(TERMIN_QUERY)
        return data[0] // Assuming single document
    } catch (error) {
        console.error('Error fetching termin data:', error)
        return null
    }
}

export default async function Termin() {
    const terminData = await getData()

    if (!terminData) return null

    return (
        <div className='footersection px-4 py-16 md:px-48 bg-green-400'>
            <div className='flex flex-col md:flex-row gap-8 md:gap-16'>
                <div className='md:flex-1 text-green-100'>
                    <PortableText value={terminData.text || []} />
                </div>
                <div className='md:flex-1'>
                    <TerminIcons />
                </div>
            </div>

        </div>
    )
}