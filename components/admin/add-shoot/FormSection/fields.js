import { categories } from '../../../../config';

const fields = [
  {
    type: 'text',
    name: 'title',
    label: 'Title',
    // isRequired: true,
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
    // isRequired: true,
  },
  {
    type: 'date',
    name: 'date',
    label: 'Date',
    // isRequired: true,
  },
  {
    type: 'text',
    name: 'location',
    label: 'Location',
    // isRequired: true,
  },
  {
    type: 'file',
    name: 'file',
    // isRequired: true,
    multiple: true,
    accept: 'image/*',
  },
];

export default fields;
