import { client } from '@/sanity/lib/client'
import { KONTAKT_QUERY } from '@/sanity/lib/queries'
import { KONTAKT_QUERYResult } from '@/sanity.types'
import { PortableText } from 'next-sanity'
import { MapProvider } from '@/app/providers/map-provider'
import { MapComponent } from '@/components/map'



export default async function Anfahrt() {
    const kontakt = await client.fetch<KONTAKT_QUERYResult>(KONTAKT_QUERY)
    const center = { lat: 47.3768866, lng: 8.541694 };
    return (
        <div className="px-4 py-16 bg-gimblet200">
            {kontakt.map((anfahrt) => (
                <div key={anfahrt._id}>
                    <h1 className='mb-6'>
                        {anfahrt.ueberschriftAnfahrt}
                    </h1>
                    <div className='mb-6'>
                        <PortableText value={anfahrt.textAnfahrt} />
                    </div>

                </div>
            ))}
            <div className='h-72'>
                <MapProvider>
                    <MapComponent />
                </MapProvider>
            </div>
        </div>
    );
}
