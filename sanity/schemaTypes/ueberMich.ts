import { defineField } from 'sanity';
import {UserIcon} from '@sanity/icons'

const ueberMich = {
    name: 'ueberMich',
    title: 'Über mich',
    type: 'document',
    icon: UserIcon,

    fields: [
        defineField({
            name: 'sortOrder',
            title: 'Menu Sort Order',
            type: 'number',
            description: 'Controls the position in the menu (higher numbers appear later)',
            validation: (rule) => rule.required(),
        }),
         defineField({
            name: 'menu',
            title: 'Menu',
            type: 'string',
        }),
         defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            description:
                'Add a custom slug for the URL',
                options: { source: 'navigation' },
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
            name: 'text',
            title: 'Text',
            type: 'array',
            of: [{ type: 'block' }],
        }),
    ],
};

export default ueberMich;