import { defineField } from "sanity";
import { BoltIcon } from '@sanity/icons'

const schwerpunktePost = {
    name: "schwerpunktePost",
    title: "Schwerpunkte Post",
    type: "document",
    icon: BoltIcon,

    fields: [
        defineField({
            name: "ueberschrift",
            title: "Überschrift",
            type: "string",
        }),
        defineField({
            name: "text",
            title: "Text",
            type: "array",
            of: [{ type: "block" }],
        }),
    ],
};

export default schwerpunktePost;