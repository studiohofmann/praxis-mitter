import { client } from '@/sanity/lib/client'
import { HOME_QUERY } from '@/sanity/lib/queries'
import { HOME_QUERYResult } from '@/sanity.types'
import HeroImage from '@/components/hero-image'
import HeroImageCaption from '@/components/hero-image-caption'
import BildSektion from '@/components/bild-sektion'
import Willkommen from '@/components/willkommen'
import Leistungen from '@/components/leistungen'
import Termin from '@/components/termin'
{/*import Interessantes from '@/components/interessantes'*/ }




export default async function Home() {
  const home = await client.fetch<HOME_QUERYResult>(HOME_QUERY)
  return (
    <main className="bg-neutral-100">
      <HeroImage />
      <HeroImageCaption />
      <Willkommen />
      <Termin />
      <Leistungen />
      {/*<BildSektion />*/}
      {/*<Interessantes />*/}
    </main>
  );
}

export const revalidate = 60;