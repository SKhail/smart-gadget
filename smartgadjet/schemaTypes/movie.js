import { defineField, defineType } from "sanity";
import {MdLocalMovies as icon} from 'react-icons/md'

export const movie = defineType({
    name: 'movie',
    title: 'Movie',
    type: 'document',
    icon,
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            }
        }),
    ],
})