import { type SchemaTypeDefinition } from 'sanity'
import landingpage from './landingpage'
import ueberMich from './ueberMich'
import praxis from './praxis'
import kontakt from './kontakt'
import impressum from './impressum'
import footer from './footer'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [landingpage, ueberMich, praxis, kontakt, impressum, footer]
}
