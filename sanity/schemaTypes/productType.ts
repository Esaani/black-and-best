import {defineField, defineType} from 'sanity'

export const productType = defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Product Name',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'name',
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
      name: 'price',
      type: 'string',
      title: 'Price',
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
      name: 'image',
      type: 'image',
      title: 'Product Image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'category',
      type: 'string',
      title: 'Category',
      options: {
        list: [
          {title: 'Preset', value: 'preset'},
          {title: 'LUTs', value: 'luts'},
          {title: 'Class', value: 'class'},
          {title: 'Other', value: 'other'},
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'variants',
      type: 'array',
      title: 'Product Variants',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'name',
              type: 'string',
              title: 'Variant Name',
              validation: (rule) => rule.required(),
            },
            {
              name: 'price',
              type: 'string',
              title: 'Variant Price',
              validation: (rule) => rule.required(),
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'featured',
      type: 'boolean',
      title: 'Featured Product',
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
      title: 'name',
      subtitle: 'category',
      media: 'image',
    },
  },
})

