import { defineField } from "sanity";
import { BoldIcon } from '@sanity/icons'


const blogPost = {
    name: "blogPost",
    title: "Blog Post",
    type: "document",
    icon: BoldIcon,

    fields: [
        defineField({
            name: "ueberschrift",
            title: "Überschrift",
            type: "string",
        }),
        {
            name: 'datum',
            title: 'Datum',
            type: 'date'
        },
        defineField({
            name: "bild",
            title: "Bild",
            type: "image",
            options: { hotspot: true },
            fields: [
                {
                    name: "alt",
                    title: "Alt",
                    type: "string",
                },
            ],
        }),
        defineField({
            name: "text",
            title: "Text",
            type: "array",
            of: [{ type: "block" }],
        }),
    ],
};

export default blogPost;