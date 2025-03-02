import { defineField } from 'sanity';
import {ArrowRightIcon} from '@sanity/icons'

const landingpage = {
    name: 'landingpage',
    title: 'Landingpage',
    type: 'document',
    icon: ArrowRightIcon,

    fields: [
         defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            description:
                'Add a custom slug for the URL',
                options: { source: 'title' },
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'bild',
            title: 'Bild',
            type: 'image',
            options: {
                hotspot: true
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
            name: 'willkommenText',
            title: 'Willkommen Text',
            type: 'array',
            of: [{ type: 'block' }],
        }),
        defineField({
            name: 'leistungenText',
            title: 'Leistungen Text',
            type: 'array',
            of: [{ type: 'block' }],
        }),
    ],
};

export default landingpage;