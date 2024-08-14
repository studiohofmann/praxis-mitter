import { defineField } from "sanity";
import { ArrowDownIcon } from '@sanity/icons'

const footer = {
    name: "footer",
    title: "Footer",
    type: "document",
    icon: ArrowDownIcon,

    fields: [
        defineField({
            name: "adresse",
            title: "Adresse",
            type: "array",
            of: [{ type: "block" }],
        }),
        defineField({
            name: "newsletterUeberschriift",
            title: "Newsletter Überschrift",
            type: "string",
        }),
        defineField({
            name: "newsletterText",
            title: "Newsletter Text",
            type: "array",
            of: [{ type: "block" }],
        }),
        defineField({
            name: "kontaktText",
            title: "Kontakt Text",
            type: "array",
            of: [{ type: "block" }],
        }),
        defineField({
            name: "copyright",
            title: "Copyright",
            type: "array",
            of: [{ type: "block" }],
        }),
        defineField({
            name: "designDevelopment",
            title: "Design & Development",
            type: "array",
            of: [{ type: "block" }],
        }),
    ],
};

export default footer;