import { defineField } from 'sanity';
import {InfoOutlineIcon} from '@sanity/icons'

const impressum = {
    name: 'impressum',
    title: 'Impressum',
    type: 'document',
    icon: InfoOutlineIcon,

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
            name: 'verantwortungText',
            title: 'Verantwortung Text',
            type: 'array',
            of: [{ type: 'block' }],
        }),
        defineField({
            name: 'impressumText',
            title: 'Impressum Text',
            type: 'array',
            of: [{ type: 'block' }],
        }),
    ],
};

export default impressum;