import {defineField, defineType} from 'sanity'

export const galleryType = defineType({
  name: 'gallery',
  title: 'Gallery',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'category',
      type: 'string',
      title: 'Category',
      options: {
        list: [
          {title: 'Wedding', value: 'wedding'},
          {title: 'Studio Shoots', value: 'studioshoots'},
          {title: 'Beauty Shoots', value: 'beautyshoots'},
          {title: 'Hair Shoots', value: 'hairshoots'},
          {title: 'Maternity Shoots', value: 'maternityshoots'},
          {title: 'Lifestyle Shoots', value: 'lifestyleshoots'},
          {title: 'Pre-Birthdays', value: 'prebirthdays'},
          {title: 'Boudoir', value: 'boudoir'},
          {title: 'Product Shoots', value: 'productshoots'},
          {title: 'Home', value: 'home'},
          {title: 'Location Shoot', value: 'location-shoot'},
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      type: 'text',
      title: 'Description',
    }),
    defineField({
      name: 'images',
      type: 'array',
      title: 'Images',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'image',
              type: 'image',
              title: 'Image',
              options: {
                hotspot: true,
              },
              validation: (rule) => rule.required(),
            },
            {
              name: 'alt',
              type: 'string',
              title: 'Alt Text',
              validation: (rule) => rule.required(),
            },
            {
              name: 'title',
              type: 'string',
              title: 'Image Title',
            },
          ],
          preview: {
            select: {
              title: 'alt',
              media: 'image',
            },
          },
        },
      ],
    }),
    defineField({
      name: 'featured',
      type: 'boolean',
      title: 'Featured Gallery',
      initialValue: false,
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
      title: 'Published At',
      initialValue: () => new Date().toISOString(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'category',
      media: 'images.0.image',
    },
  },
})

