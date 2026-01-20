import {defineField, defineType} from 'sanity'

export const faqType = defineType({
  name: 'faq',
  title: 'FAQ',
  type: 'document',
  fields: [
    defineField({
      name: 'question',
      type: 'string',
      title: 'Question',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'answer',
      type: 'array',
      title: 'Answer',
      of: [{type: 'block'}],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'category',
      type: 'string',
      title: 'Category',
      options: {
        list: [
          {title: 'General', value: 'general'},
          {title: 'Booking', value: 'booking'},
          {title: 'Pricing', value: 'pricing'},
          {title: 'Services', value: 'services'},
          {title: 'Products', value: 'products'},
          {title: 'Payment', value: 'payment'},
          {title: 'Delivery', value: 'delivery'},
          {title: 'Other', value: 'other'},
        ],
      },
      initialValue: 'general',
    }),
    defineField({
      name: 'order',
      type: 'number',
      title: 'Display Order',
      description: 'Lower numbers appear first',
      initialValue: 0,
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
      title: 'question',
      subtitle: 'category',
    },
  },
  orderings: [
    {
      title: 'Order (Low to High)',
      name: 'orderAsc',
      by: [{field: 'order', direction: 'asc'}],
    },
    {
      title: 'Category',
      name: 'categoryAsc',
      by: [{field: 'category', direction: 'asc'}],
    },
  ],
})

