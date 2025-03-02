import { groq } from "next-sanity";

export const MENU_QUERY = groq`*[_type in ["ueberMich", "praxis", "kontakt", "impressum"]] | order(sortOrder asc) {menu, slug}`

export const LANDINGPAGE_QUERY = groq`*[_type == "landingpage"] {bild, willkommenText, leistungenText}`

export const UEBERMICH_QUERY = groq`*[_type == "ueberMich"] {bild, text}`

export const PRAXIS_QUERY = groq`*[_type == "praxis"] {bilder[], text}`

export const KONTAKT_QUERY = groq`*[_type == "kontakt"] {iconsText, navigationText, telefonnummer, email, instagram, formularText, anfahrtText}`

export const IMPRESSUM_QUERY = groq`*[_type == "impressum"] {verantwortungText, impressumText}`

export const FOOTER_QUERY = groq`*[_type == "footer"] {terminText, anerkennungText, adresse, copyright}`
