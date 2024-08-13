import { defineField } from "sanity";
import { MenuIcon } from '@sanity/icons'

const menue = {
    name: "menue",
    title: "Menü",
    type: "document",
    icon: MenuIcon,

    fields: [
        defineField({
            name: "termin",
            title: "Termin",
            type: "array",
            of: [{ type: "block" }],
        }),
    ],
};

export default menue;