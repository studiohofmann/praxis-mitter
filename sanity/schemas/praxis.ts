import { defineField } from "sanity";
import { EnvelopeIcon } from '@sanity/icons'

const praxis = {
    name: "praxis",
    title: "Praxis",
    type: "document",
    icon: EnvelopeIcon,

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
            name: "text",
            title: "Text",
            type: "array",
            of: [{ type: "block" }],
        }),
        defineField({
            name: 'galerie',
            title: 'Galerie',
            type: 'array',
            of: [{
                name: 'bild',
                type: 'image',
                title: 'Bild',
                options: {
                    hotspot: true,
                },
                fields: [
                    {
                        name: 'alt',
                        type: 'string',
                        title: 'Alternative text',
                    },
                ],
            },],
        }),

    ],
};

export default praxis;