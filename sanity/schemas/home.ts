import { defineField } from "sanity";
import { HomeIcon } from '@sanity/icons'

const home = {
    name: "home",
    title: "Home",
    type: "document",
    icon: HomeIcon,

    fields: [
        defineField({
            name: 'heroImage',
            title: 'Hero Image',
            type: 'image',
            options: {
                hotspot: true // <-- Defaults to false
            },
            fields: [
                {
                    name: "caption",
                    title: "Caption",
                    type: "array",
                    of: [{ type: "block" }],
                },
                {
                    name: "alt",
                    title: "Alt",
                    type: "string",
                },
            ]
        }),

        defineField({
            name: "header",
            title: "Header",
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

export default home;