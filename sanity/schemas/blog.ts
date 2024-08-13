import { defineField } from "sanity";
import { BoldIcon } from '@sanity/icons'

const blog = {
    name: "blog",
    title: "Blog",
    type: "document",
    icon: BoldIcon,

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
            name: "text",
            title: "Text",
            type: "array",
            of: [{ type: "block" }],
        }),
    ],
};

export default blog;