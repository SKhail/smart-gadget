// carouselItem.js

import { defineType, defineField } from 'sanity';

export const homepage = defineType({
  name: 'homepage',
  title: 'homepage',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Image',
      options: {
        hotspot: true, 
      },
    }),
    defineField({
      name: 'link',
      type: 'url',
      title: 'Link',
    }),
  ],
});
