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
          {title: 'Photography', value: 'Photography'},
          {title: 'Videography', value: 'Videography'},
          {title: 'Both', value: 'Both'},
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
          {title: 'Wedding', value: 'Wedding'},
          {title: 'Studio Shoots', value: 'Studio Shoots'},
          {title: 'Beauty', value: 'Beauty'},
          {title: 'Conference', value: 'Conference'},
          {title: 'Maternity', value: 'Maternity'},
          {title: 'Lifestyle', value: 'Lifestyle'},
          {title: 'Pre-Birthdays', value: 'Pre-Birthdays'},
          {title: 'Agenda', value: 'Agenda'},
          {title: 'Product', value: 'Product'},
          {title: 'Home', value: 'Home'},
          {title: 'Location Shoot', value: 'Location Shoot'},
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
          {title: 'Pending', value: 'Pending'},
          {title: 'Confirmed', value: 'Confirmed'},
          {title: 'Completed', value: 'Completed'},
          {title: 'Cancelled', value: 'Cancelled'},
        ],
      },
      initialValue: 'Pending',
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

