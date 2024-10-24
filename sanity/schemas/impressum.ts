import { defineField } from "sanity";
import { BookIcon } from '@sanity/icons'

const impressum = {
    name: "impressum",
    title: "Impressum",
    type: "document",
    icon: BookIcon,

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
    ],
};

export default impressum;