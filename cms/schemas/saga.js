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
