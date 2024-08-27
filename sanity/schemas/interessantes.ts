import { defineField } from "sanity";
import { BellIcon } from '@sanity/icons'

const interessantes = {
    name: "interessantes",
    title: "Interessantes",
    type: "document",
    icon: BellIcon,

    fields: [
        defineField({
            name: "ueberschrift",
            title: "Überschrift",
            type: "string",
        }),
        defineField({
            name: "textOben",
            title: "Text Oben",
            type: "array",
            of: [{ type: "block" }],
        }),

        defineField({
            name: "textUnten",
            title: "Text Unten",
            type: "array",
            of: [{ type: "block" }],
        }),
    ],
};

export default interessantes;