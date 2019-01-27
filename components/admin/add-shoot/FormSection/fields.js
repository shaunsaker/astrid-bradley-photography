import { categories } from '../../../../config';

const fields = [
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
    name: 'category',
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
];

export default fields;
