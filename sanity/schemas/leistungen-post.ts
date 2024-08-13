import { defineField } from "sanity";
import { ActivityIcon } from '@sanity/icons'

const leistungenPost = {
    name: "leistungenPost",
    title: "Leistungen Post",
    type: "document",
    icon: ActivityIcon,

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

export default leistungenPost;