import React from 'react';
import { MdClose, MdMail, MdWarning } from 'react-icons/md';

const icons = {
  close: (props) => <MdClose {...props} />,
  mail: (props) => <MdMail {...props} />,
  warning: (props) => <MdWarning {...props} />,
};

export default icons;
