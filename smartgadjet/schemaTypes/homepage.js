import {defineField, defineType} from 'sanity'

export const homepage = defineType({
  name: 'homepage',
  title: 'Home Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: "Title",
    }),
    defineField({
        name: 'carousel',
        type: 'array',
        title: 'Carousel',
        of: [
            {type: 'image'},
        ]

    })
  ],
})