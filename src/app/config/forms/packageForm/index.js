import categories from '../../categories';

const packageForm = [
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
    type: 'number',
    name: 'price',
    label: 'Price (R)',
    isRequired: true,
  },
  {
    type: 'number',
    name: 'time',
    label: 'Time (hrs)',
    isRequired: true,
  },
  {
    type: 'number',
    name: 'distance',
    label: 'Distance/range included in price (km)',
    isRequired: true,
  },
  {
    type: 'number',
    name: 'photos',
    label: 'Number of Photos',
    isRequired: true,
  },
  {
    type: 'textarea',
    name: 'notes',
    label: 'Notes',
  },

  // ADD ONS COME FROM DB (DYNAMIC)
];

export default packageForm;
