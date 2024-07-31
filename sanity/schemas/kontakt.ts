import { defineField } from "sanity";

const kontakt = {
    name: "kontakt",
    title: "Kontakt",
    type: "document",

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

export default kontakt;