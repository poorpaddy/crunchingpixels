import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'
export default createSchema({

  name: 'Sagas',
  types: schemaTypes.concat([
    {
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
          title: 'Category',
          name: 'categories',
          type: 'string',
          options: {
            list: [
              {value: 'recipe', title: 'Recipe'},
              {value: 'think', title: 'Think Tank'},
              {value: 'fun', title: 'Fun Stuff'},
            ],
          },
        },
        {
          title: "Summary",
          name: "summary",
          type: "text",
        },
        {
          title: "Body",
          name: "body",
          type: 'array',
          of: [{type: 'block'}]
        },
        {
          title: "Thumbnail",
          name: "thumbnail",
          type: "image",
        },
        {
          title: 'Gallery',
          name: 'gallery',
          type: 'array',
          of: [{ type: 'image' }]
        }
      ]
    }
  ])
})