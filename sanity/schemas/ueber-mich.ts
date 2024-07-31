import { defineField } from "sanity";

const uebermich = {
    name: "uebermich",
    title: "Über mich",
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

export default uebermich;