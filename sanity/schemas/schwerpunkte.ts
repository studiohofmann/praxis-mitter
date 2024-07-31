import { defineField } from "sanity";

const schwerpunkte = {
    name: "schwerpunkte",
    title: "Schwerpunkte",
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

export default schwerpunkte;