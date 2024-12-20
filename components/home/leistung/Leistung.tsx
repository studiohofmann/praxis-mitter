// FILE: components/Leistung.tsx
import { client } from '@/sanity/lib/client'
import { LEISTUNG_QUERY } from '@/sanity/lib/queries'
import { Leistung as LeistungType } from '@/sanity.types'

async function getData() {
    try {
        const data = await client.fetch<LeistungType[]>(LEISTUNG_QUERY)
        return data
    } catch (error) {
        console.error('Error fetching leistungen:', error)
        return null
    }
}

export default async function Leistung() {
    const leistungen = await getData()

    if (!leistungen) return null

    return (

        <ul className="list-disc pl-4 space-y-4">
            {leistungen.map((leistung, index) => (
                <li key={index}>
                    <h3>
                        {leistung.ueberschrift}
                    </h3>
                </li>
            ))}
        </ul>

    )
}