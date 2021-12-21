export default {
  title: "Portfolio",
  name: "portfolio",
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
      type: "reference",
      to: [{ type: "category" }],
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
      of: [{ type: "block" }],
    },
    {
      title: "Thumbnail",
      name: "thumbnail",
      type: "image",
    },
    {
      title: "Gallery",
      name: "gallery",
      type: "array",
      of: [{ type: "image" }],
    },
  ],
};
