import { defineField } from 'sanity';
import {ArrowDownIcon} from '@sanity/icons'

const footer = {
    name: 'footer',
    title: 'Footer',
    type: 'document',
    icon: ArrowDownIcon,

    fields: [
        defineField({
            name: 'terminText',
            title: 'Termin Text',
            type: 'array',
            of: [{ type: 'block' }],
        }),
       defineField({
            name: 'anerkennungText',
            title: 'Anerkennung Text',
            type: 'array',
            of: [{ type: 'block' }],
        }),
         defineField({
            name: 'adresse',
            title: 'Adresse',
            type: 'array',
            of: [{ type: 'block' }],
        }),
        defineField({
            name: 'copyright',
            title: 'Copyright',
            type: 'array',
            of: [{ type: 'block' }],
        }),
    ],
};

export default footer;