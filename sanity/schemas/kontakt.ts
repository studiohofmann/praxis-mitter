import { defineField } from "sanity";
import { AddCommentIcon } from '@sanity/icons'

const kontakt = {
    name: "kontakt",
    title: "Kontakt",
    type: "document",
    icon: AddCommentIcon,

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
            name: "textFormular",
            title: "Text Formular",
            type: "array",
            of: [{ type: "block" }],
        }),
        defineField({
            name: "textIcons",
            title: "Text Icons",
            type: "array",
            of: [{ type: "block" }],
        }),
    ],
};

export default kontakt;