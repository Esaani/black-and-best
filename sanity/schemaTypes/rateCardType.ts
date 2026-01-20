import {defineField, defineType} from 'sanity'

export const rateCardType = defineType({
  name: 'rateCard',
  title: 'Rate Card',
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
      name: 'description',
      type: 'text',
      title: 'Description',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'currency',
      type: 'string',
      title: 'Currency',
      options: {
        list: [
          {title: 'GHS (Ghana Cedis)', value: 'GHS'},
          {title: 'USD (US Dollars)', value: 'USD'},
        ],
      },
      initialValue: 'GHS',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'packages',
      type: 'array',
      title: 'Packages',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'name',
              type: 'string',
              title: 'Package Name',
              validation: (rule) => rule.required(),
            },
            {
              name: 'slug',
              type: 'slug',
              title: 'Package Slug',
              options: {
                source: 'name',
                maxLength: 96,
              },
            },
            {
              name: 'description',
              type: 'text',
              title: 'Description',
            },
            {
              name: 'price',
              type: 'string',
              title: 'Price',
              validation: (rule) => rule.required(),
            },
            {
              name: 'duration',
              type: 'string',
              title: 'Duration',
            },
            {
              name: 'features',
              type: 'array',
              title: 'Features',
              of: [{type: 'string'}],
            },
            {
              name: 'deliverables',
              type: 'array',
              title: 'Deliverables',
              of: [{type: 'string'}],
            },
          ],
          preview: {
            select: {
              title: 'name',
              subtitle: 'price',
            },
          },
        },
      ],
      validation: (rule) => rule.required().min(1),
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
      subtitle: 'currency',
    },
  },
})

