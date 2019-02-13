import categories from '../../categories';

const shootForm = [
  {
    type: 'text',
    name: 'name',
    label: 'Name',
    isRequired: true,
  },
  {
    type: 'select',
    options: categories.map((category) => {
      const { name, id } = category;

      return {
        name,
        value: id,
      };
    }),
    name: 'category_id',
    label: 'Select a Category:',
    isRequired: true,
  },
  {
    type: 'date',
    name: 'date',
    label: 'Date',
    isRequired: true,
  },
  {
    type: 'text',
    name: 'location',
    label: 'Location',
    isRequired: true,
  },
  {
    type: 'text',
    name: 'download_url',
    label: 'Download URL',
  },
  {
    type: 'checkbox',
    name: 'delivered',
    label: 'Delivered:',
  },
  {
    type: 'checkbox',
    name: 'archived',
    label: 'Archive Shoot:',
  },
];

export default shootForm;
