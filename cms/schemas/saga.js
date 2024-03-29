import slugify from "slugify";
export default {
  title: "Saga",
  name: "saga",
  type: "document",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      title: "Date",
      name: "date",
      type: "date",
    },
    {
      title: "Category",
      name: "category",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "category" }],
          options: {
            filter: () => {
              return {
                filter: "type == $type",
                params: { type: "saga" },
              };
            },
          },
        },
      ],
    },
    {
      title: "Summary",
      name: "summary",
      type: "text",
    },
    {
      title: "Body",
      name: "body",
      type: "array",
      of: [{ type: "block" }, { type: "image" }, { type: "videoEmbed" }],
    },
    {
      title: "Thumbnail",
      name: "thumbnail",
      type: "image",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Gallery",
      name: "gallery",
      type: "array",
      of: [{ type: "image" }],
    },
    {
      title: "Slug",
      name: "slug",
      type: "slug",
      validation: (Rule) => Rule.required(),
      options: {
        source: "title",
        slugify: (input) => slugify(input, { lower: true }),
      },
    },
  ],
};
