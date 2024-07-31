import { type SchemaTypeDefinition } from 'sanity'
import home from './schemas/home'
import schwerpunkte from './schemas/schwerpunkte'
import uebermich from './schemas/ueber-mich'
import blog from './schemas/blog'
import blogPost from './schemas/blog-post'
import kontakt from './schemas/kontakt'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [home, schwerpunkte, uebermich, blog, blogPost, kontakt],
}
