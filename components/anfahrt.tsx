import { client } from '@/sanity/lib/client'
import { ANFAHRT_QUERY } from '@/sanity/lib/queries'
import { ANFAHRT_QUERYResult } from '@/sanity.types'
import { PortableText } from 'next-sanity'
import { MapProvider } from '@/app/providers/map-provider'
import { MapComponent } from '@/components/map'



export default async function Anfahrt() {
    const anfahrt = await client.fetch<ANFAHRT_QUERYResult>(ANFAHRT_QUERY)
    const center = { lat: 47.3768866, lng: 8.541694 };
    return (
        <div id="anfahrt" className="px-8 pt-16 pb-32 bg-avocado300 text-avocado600">
            {anfahrt.map((item: any) => (
                <div key={item._id} className='flex flex-col gap-8'>
                    <h2>{item.ueberschriftNavigation}</h2>
                    <PortableText value={item.text} />
                    <MapProvider>
                        <MapComponent />
                    </MapProvider>


                </div>
            ))}
        </div>
    );
}
