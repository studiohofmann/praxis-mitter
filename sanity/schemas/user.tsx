import { defineField } from "sanity";
import { StarIcon } from '@sanity/icons'

const user = {
    name: "user",
    title: "User",
    type: "document",
    icon: StarIcon,

    fields: [

        defineField({
            name: "name",
            title: "Name",
            type: "string",
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

    ],
};

export default user;