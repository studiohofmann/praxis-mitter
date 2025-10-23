import { defineField } from "sanity";
import { EnvelopeIcon } from "@sanity/icons";

const kontakt = {
  name: "kontakt",
  title: "Kontakt",
  type: "document",
  icon: EnvelopeIcon,

  fields: [
    defineField({
      name: "sortOrder",
      title: "Menu Sort Order",
      type: "number",
      description:
        "Controls the position in the menu (higher numbers appear later)",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "menu",
      title: "Menu",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      description: "Add a custom slug for the URL",
      options: { source: "navigation" },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "iconsUeberschrift",
      title: "Icons Überschrift",
      type: "string",
    }),
    defineField({
      name: "iconsText",
      title: "Icons Text",
      type: "array",
      of: [{ type: "block" }],
    }),

    defineField({
      name: "navigationText",
      title: "Navigation Text",
      type: "string",
    }),
    defineField({
      name: "telefonnummer",
      title: "Telefonnummer",
      type: "string",
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
    }),

    defineField({
      name: "instagram",
      title: "Instagram",
      type: "string",
    }),
    defineField({
      name: "formularUeberschrift",
      title: "Formular Überschrift",
      type: "string",
    }),
    defineField({
      name: "formularText",
      title: "Formular Text",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "anfahrtUeberschrift",
      title: "Anfahrt Überschrift",
      type: "string",
    }),
    defineField({
      name: "anfahrtText",
      title: "Anfahrt Text",
      type: "array",
      of: [{ type: "block" }],
    }),
  ],
};

export default kontakt;
