import { defineField } from "sanity";
import { BoldIcon } from '@sanity/icons'

const blog = {
    name: "blog",
    title: "Blog",
    type: "document",
    icon: BoldIcon,

    fields: [
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

export default blog;