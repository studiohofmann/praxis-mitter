import { defineField } from "sanity";
import { ArrowRightIcon } from "@sanity/icons";

const landingpage = {
  name: "landingpage",
  title: "Landingpage",
  type: "document",
  icon: ArrowRightIcon,

  fields: [
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      description: "Add a custom slug for the URL",
      options: { source: "title" },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "bild",
      title: "Bild",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    }),
    defineField({
      name: "einleitungUeberschrift",
      title: "Einleitung Überschrift",
      type: "string",
    }),
    defineField({
      name: "einleitungText",
      title: "Einleitung Text",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "leistungenUeberschrift",
      title: "Leistungen Überschrift",
      type: "string",
    }),
    defineField({
      name: "leistungenText",
      title: "Leistungen Text",
      type: "array",
      of: [{ type: "block" }],
    }),
  ],
};

export default landingpage;
