import slugify from "slugify";
export default {
  title: "Category",
  name: "category",
  type: "document",
  fields: [
    {
      title: "Name",
      name: "name",
      type: "string",
    },
    {
      title: "Type",
      name: "type",
      type: "string",
      options: {
        list: [
          { value: "saga", title: "Saga" },
          { value: "portfolio", title: "Portfolio" },
        ],
      },
    },
    {
      title: "Slug",
      name: "slug",
      type: "slug",
      validation: (Rule) => Rule.required(),
      options: {
        source: "name",
        slugify: (input) => slugify(input, { lower: true }),
      },
    },
  ],
};
