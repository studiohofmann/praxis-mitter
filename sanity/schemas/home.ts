import { defineField } from "sanity";
import { HomeIcon } from '@sanity/icons'

const home = {
    name: "home",
    title: "Home",
    type: "document",
    icon: HomeIcon,

    fields: [

        defineField({
            name: "seite",
            title: "Seite",
            type: "string",
        }),
        defineField({
            name: 'logo',
            title: 'Logo',
            type: 'image',
            options: {
                hotspot: true // <-- Defaults to false
            },
            fields: [
                {
                    name: "alt",
                    title: "Alt",
                    type: "string",
                },
            ]
        }),
        defineField({
            name: 'bild',
            title: 'Bild',
            type: 'image',
            options: {
                hotspot: true // <-- Defaults to false
            },
            fields: [
                {
                    name: "alt",
                    title: "Alt",
                    type: "string",
                },
                {
                    name: "caption",
                    title: "Caption",
                    type: "array",
                    of: [{ type: "block" }],
                },

            ]
        }),
        defineField({
            name: "text",
            title: "Text",
            type: "array",
            of: [{ type: "block" }],
        }),
        defineField({
            name: 'bildSektion',
            title: 'Bild Sektion',
            type: 'image',
            options: {
                hotspot: true // <-- Defaults to false
            },
            fields: [
                {
                    name: "alt",
                    title: "Alt",
                    type: "string",
                },
                {
                    name: "caption",
                    title: "Caption",
                    type: "array",
                    of: [{ type: "block" }],
                },

            ]
        }),
    ],
};

export default home;