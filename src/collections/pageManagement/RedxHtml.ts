import { CollectionConfig } from 'payload'

const RedxHtml: CollectionConfig = {
  slug: 'redx_html',
  labels: {
    singular: 'Redx Html',
    plural: 'Redx Htmls',
  },
  admin: {
    group: 'Page Management',
    defaultColumns: ['redxHtml'],
  },
  fields: [
    {
      name: 'redxHtml',
      type: 'textarea',
      label: 'Redx Html',
      required: true,
      admin: {
        description: 'Test description',
      },
    },
  ],
}

export default RedxHtml
