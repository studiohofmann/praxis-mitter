import { type SchemaTypeDefinition } from 'sanity'
import home from './schemas/home'
import schwerpunkte from './schemas/schwerpunkte'
import schwerpunktePost from './schemas/schwerpunkte-post'
import uebermich from './schemas/ueber-mich'
import blog from './schemas/blog'
import blogPost from './schemas/blog-post'
import kontakt from './schemas/kontakt'
import leistungen from './schemas/leistungen'
import leistungenPost from './schemas/leistungen-post'
import menue from './schemas/menue'
import user from './schemas/user'
import impressum from './schemas/impressum'
import footer from './schemas/footer'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blog, blogPost, footer, home, impressum, kontakt, leistungen, leistungenPost, menue, schwerpunkte, schwerpunktePost, uebermich, user],
}
