import { type SchemaTypeDefinition } from 'sanity'
import home from '../schemas/home'
import schwerpunkte from '../schemas/schwerpunkte'
import schwerpunktePost from '../schemas/schwerpunkte-post'
import uebermich from '../schemas/ueber-mich'
import blog from '../schemas/blog'
import blogPost from '../schemas/blog-post'
import interessantes from '../schemas/interessantes'
import kontakt from '../schemas/kontakt'
import leistungen from '../schemas/leistungen'
import leistungenPost from '../schemas/leistungen-post'
import menue from '../schemas/menue'
import user from '../schemas/user'
import impressum from '../schemas/impressum'
import footer from '../schemas/footer'
import termin from '../schemas/termin'
import anfahrt from '../schemas/anfahrt'
import praxis from '../schemas/praxis'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [anfahrt, blog, blogPost, footer, home, impressum, interessantes, kontakt, leistungen, leistungenPost, menue, praxis, schwerpunkte, schwerpunktePost, termin, uebermich, user],
}
