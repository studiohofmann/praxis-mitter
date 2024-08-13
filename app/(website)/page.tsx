import { client } from '@/sanity/lib/client'
import { HOME_QUERY } from '@/sanity/lib/queries'
import { HOME_QUERYResult } from '@/sanity.types'
import HeroImage from '@/components/hero-image'
import Willkommen from '@/components/willkommen'
import Leistungen from '@/components/leistungen'
import LeistungenPost from '@/components/leistungen-post'


export default async function Home() {
  const home = await client.fetch<HOME_QUERYResult>(HOME_QUERY)
  return (
    <main className="">
      <Willkommen />
      <HeroImage />
      <Leistungen />
      <LeistungenPost />
    </main>
  );
}

export const revalidate = 60;