import { client } from '@/sanity/lib/client'
import { KONTAKT_QUERY } from '@/sanity/lib/queries'
import { KONTAKT_QUERYResult } from '@/sanity.types'
import { PortableText } from 'next-sanity'
import Anfahrt from '@/components/anfahrt'
import { MapProvider } from '@/app/providers/map-provider'
import { MapComponent } from '@/components/map'



export default async function Kontakt() {
    const kontakt = await client.fetch<KONTAKT_QUERYResult>(KONTAKT_QUERY)
    return (
        <div className="px-3">
            {kontakt.map((willkommen) => (
                <div key={willkommen._id}>
                    <h1 className='pt-12'>{willkommen.ueberschriftNavigation}</h1>
                    <br />
                    <PortableText value={willkommen.text} />
                </div>
            ))}
            <Anfahrt />
            <div className='h-24'> <MapProvider>
                <MapComponent />
            </MapProvider></div>

        </div>
    );
}
