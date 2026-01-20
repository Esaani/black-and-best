import {defineField, defineType} from 'sanity'

export const bookingType = defineType({
  name: 'booking',
  title: 'Booking',
  type: 'document',
  fields: [
    defineField({
      name: 'clientName',
      type: 'string',
      title: 'Client Name',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'email',
      type: 'email',
      title: 'Email',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'phone',
      type: 'string',
      title: 'Phone Number',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'serviceType',
      type: 'string',
      title: 'Service Type',
      options: {
        list: [
          {title: 'Photography', value: 'photography'},
          {title: 'Videography', value: 'videography'},
          {title: 'Both', value: 'both'},
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'shootType',
      type: 'string',
      title: 'Shoot Type',
      options: {
        list: [
          {title: 'Wedding', value: 'wedding'},
          {title: 'Studio Shoot', value: 'studio'},
          {title: 'Beauty Shoot', value: 'beauty'},
          {title: 'Hair Shoot', value: 'hair'},
          {title: 'Maternity Shoot', value: 'maternity'},
          {title: 'Lifestyle Shoot', value: 'lifestyle'},
          {title: 'Pre-Birthday', value: 'prebirthday'},
          {title: 'Boudoir', value: 'boudoir'},
          {title: 'Product Shoot', value: 'product'},
          {title: 'Location Shoot', value: 'location'},
          {title: 'Other', value: 'other'},
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'eventDate',
      type: 'date',
      title: 'Event Date',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'location',
      type: 'string',
      title: 'Location',
    }),
    defineField({
      name: 'message',
      type: 'text',
      title: 'Message/Additional Details',
    }),
    defineField({
      name: 'status',
      type: 'string',
      title: 'Status',
      options: {
        list: [
          {title: 'Pending', value: 'pending'},
          {title: 'Confirmed', value: 'confirmed'},
          {title: 'Completed', value: 'completed'},
          {title: 'Cancelled', value: 'cancelled'},
        ],
      },
      initialValue: 'pending',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'createdAt',
      type: 'datetime',
      title: 'Created At',
      initialValue: () => new Date().toISOString(),
      readOnly: true,
    }),
    defineField({
      name: 'notes',
      type: 'text',
      title: 'Internal Notes',
      description: 'Private notes for internal use only',
    }),
  ],
  preview: {
    select: {
      title: 'clientName',
      subtitle: 'serviceType',
      eventDate: 'eventDate',
      status: 'status',
    },
    prepare({title, subtitle, eventDate, status}) {
      return {
        title: title || 'Untitled Booking',
        subtitle: `${subtitle} - ${eventDate || 'No date'} (${status})`,
      }
    },
  },
  orderings: [
    {
      title: 'Created At (Newest)',
      name: 'createdAtDesc',
      by: [{field: 'createdAt', direction: 'desc'}],
    },
    {
      title: 'Event Date (Upcoming)',
      name: 'eventDateAsc',
      by: [{field: 'eventDate', direction: 'asc'}],
    },
  ],
})

