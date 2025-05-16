import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'metaLead',
  title: 'Meta Ads Lead',
  type: 'document',
  fields: [
    defineField({
      name: 'fullName',
      title: 'Full Name',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: Rule => Rule.required().email()
    }),
    defineField({
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'budget',
      title: 'Budget Range',
      type: 'string'
    }),
    defineField({
      name: 'message',
      title: 'Message / Notes',
      type: 'text'
    }),
    defineField({
      name: 'createdAt',
      title: 'Submitted At',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      readOnly: true
    })
  ]
})
