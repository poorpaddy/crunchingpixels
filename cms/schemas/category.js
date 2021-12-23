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
  ],
};
