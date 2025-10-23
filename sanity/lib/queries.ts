import { groq } from "next-sanity";

export const MENU_QUERY = groq`*[_type in ["ueberMich", "praxis", "kontakt", "impressum"]] | order(sortOrder asc) {menu, slug}`;

export const LANDINGPAGE_QUERY = groq`*[_type == "landingpage"] {bild, einleitungUeberschrift, einleitungText, leistungenUeberschrift, leistungenText}`;

export const UEBERMICH_QUERY = groq`*[_type == "ueberMich"] {menu, bild, ueberschrift, text}`;

export const PRAXIS_QUERY = groq`*[_type == "praxis"] {menu, bilder[], ueberschrift, text}`;

export const KONTAKT_QUERY = groq`*[_type == "kontakt"] {menu,iconsUeberschrift, iconsText, navigationText, telefonnummer, email, instagram, formularUeberschrift, formularText, anfahrtUeberschrift, anfahrtText}`;

export const IMPRESSUM_QUERY = groq`*[_type == "impressum"] {menu, verantwortungUeberschrift, verantwortungText, impressumUeberschrift, impressumText}`;

export const FOOTER_QUERY = groq`*[_type == "footer"] {terminUeberschrift, terminText, anerkennungUeberschrift, anerkennungText, adresseUeberschrift, adresse, copyright}`;
