import { groq } from "next-sanity"

export const BLOG_QUERY = groq`*[_type == "blog"]{_id, ueberschriftNavigation, text}`
export const BLOG_POST_QUERY = groq`*[_type == "blogPost"]{_id, ueberschrift, datum, text, bild, autor {user->{  _id, name, bild,}}}`
export const FOOTER_QUERY = groq`*[_type == "footer"] {_id, adresse, newsletterUeberschriift, newsletterText, oeffnungszeiten, copyright, designDevelopment}`
export const HOME_QUERY = groq`*[_type == "home"] {_id, seite, bild, logo, text, bildSektion}`
export const IMPRESSUM_QUERY = groq`*[_type == "impressum"] {_id, ueberschriftNavigation, text}`
export const INTERESSANTES_QUERY = groq`*[_type == "interessantes"]{_id, ueberschrift, textOben, textUnten}`
export const INTERESSANTES_POST_QUERY = groq`*[_type == "blogPost"]{_id, ueberschrift, datum, text, bild, autor {user->{  _id, name, bild,}}}[0]`
export const KONTAKT_QUERY = groq`*[_type == "kontakt"] {_id, ueberschriftNavigation, text, ueberschriftAnfahrt, textAnfahrt}`
export const LEISTUNGEN_QUERY = groq`*[_type == "leistungen"] {_id, ueberschrift, text}`
export const LEISTUNGEN_POST_QUERY = groq`*[_type == "leistungenPost"] {_id, ueberschrift, text}`
export const MENUE_QUERY = groq`*[_type == "menue"] {_id, termin}`
export const NAVIGATION_QUERY = groq`*[defined(ueberschriftNavigation) && defined(slug)]{_id, ueberschriftNavigation, "slug": slug.current,}`
export const SCHWERPUNKTE_QUERY = groq`*[_type == "schwerpunkte"] {_id, ueberschriftNavigation, text}`
export const SCHWERPUNKTE_POST_QUERY = groq`*[_type == "schwerpunktePost"] {_id, bild, ueberschrift, text}`
export const TERMIN_QUERY = groq`*[_type == "termin"] {_id, ueberschrift, text}`
export const UEBER_MICH_QUERY = groq`*[_type == "uebermich"] {_id, ueberschriftNavigation, bild, text, ueberschrift, praxisText, galerie[]{
    asset->{
      _id,
      url,}}}`

