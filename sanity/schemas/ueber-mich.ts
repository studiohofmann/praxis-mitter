import { defineField } from "sanity";
import { BulbOutlineIcon } from '@sanity/icons'

const uebermich = {
    name: "uebermich",
    title: "Über mich",
    type: "document",
    icon: BulbOutlineIcon,

    fields: [
        defineField({
            name: "ueberschriftNavigation",
            title: "Überschrift / Navigation",
            type: "string",
        }),
        defineField({
            name: "slug",
            title: "Slug",
            type: "slug",
            description:
                "Add a custom slug for the URL or generate one from the name",
            options: { source: "ueberschriftNavigation" },
            validation: (rule) => rule.required(),
        }),

        defineField({
            name: 'reihenfolge',
            title: 'Reihenfolge',  // Add a descriptive title for your field
            type: 'number',       // This is the number field
            description: 'Anordnung der Links ',
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
            ]
        }),
        defineField({
            name: "text",
            title: "Text",
            type: "array",
            of: [{ type: "block" }],
        }),
    ],
};

export default uebermich;