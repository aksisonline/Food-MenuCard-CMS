import update from 'payload/dist/collections/operations/update'
import { CollectionConfig } from 'payload/types'

const Items: CollectionConfig = {
    slug: 'Items',
    access: {
      read: () => true, // Allow read access to anyone
      // Optionally, you can define other access controls for create, update, delete, etc.
    },
    fields: [
      {
        name: 'title',
        type: 'text',
        required: true,
      },
      {
        name: 'Price',
        type: 'number',
        required: true,
      },
      {
        name: 'Photo',
        type: 'upload',
        relationTo: 'Media',
        required: true,
      }
    ],
    

  }
  export default Items