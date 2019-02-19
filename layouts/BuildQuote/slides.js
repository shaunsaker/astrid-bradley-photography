import React from 'react';

import SelectShootTypeSection from './SelectShootTypeSection';
import SelectPackageSection from './SelectPackageSection';

const slides = [
  {
    title: 'Select type of shoot',
    component: (props) => <SelectShootTypeSection {...props} />,
  },
  {
    title: 'Select package',
    component: (props) => <SelectPackageSection {...props} />,
  },
  {
    title: 'Customise package',
  },
  {
    title: 'Check availability',
  },
  {
    title: 'Enter info',
  },
  {
    title: 'Done',
  },
];

export default slides;
