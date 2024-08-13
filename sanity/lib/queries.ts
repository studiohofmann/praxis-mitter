import { groq } from "next-sanity"

export const BLOG_QUERY = groq`*[_type == "blog"]{_id, ueberschriftNavigation, text}`
export const BLOG_POST_QUERY = groq`*[_type == "blogPost"]{_id, ueberschrift, datum, text, bild, autor {user->{  _id, name, bild,}}}`
export const HOME_QUERY = groq`*[_type == "home"] {_id, seite, bild, logo, text}`
export const KONTAKT_QUERY = groq`*[_type == "kontakt"] {_id, ueberschriftNavigation, text, ueberschriftAnfahrt, textAnfahrt}`
export const LEISTUNGEN_QUERY = groq`*[_type == "leistungen"] {_id, ueberschrift, text}`
export const LEISTUNGEN_POST_QUERY = groq`*[_type == "leistungenPost"] {_id, ueberschrift, text}`
export const MENUE_QUERY = groq`*[_type == "menue"] {_id, termin}`
export const NAVIGATION_QUERY = groq`*[defined(ueberschriftNavigation) && defined(slug)]{_id, ueberschriftNavigation, "slug": slug.current,}`
export const SCHWERPUNKTE_QUERY = groq`*[_type == "schwerpunkte"] {_id, ueberschriftNavigation, text}`
export const SCHWERPUNKTE_POST_QUERY = groq`*[_type == "schwerpunktePost"] {_id, ueberschrift, text}`
export const UEBER_MICH_QUERY = groq`*[_type == "uebermich"] {_id, ueberschriftNavigation, bild, text}`

