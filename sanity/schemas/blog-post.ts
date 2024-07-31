import { defineField } from "sanity";
import { BoldIcon } from '@sanity/icons'


const blogPost = {
    name: "blogPost",
    title: "Blog Post",
    type: "document",
    icon: BoldIcon,

    fields: [
        defineField({
            name: "header",
            title: "Header",
            type: "string",
        }),
        {
            name: 'date',
            title: 'Date',
            type: 'date'
        },
        defineField({
            name: "image",
            title: "Image",
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