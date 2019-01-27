import React from 'react';
import { MdClose, MdInfo, MdMail } from 'react-icons/md';

const icons = {
  close: (props) => <MdClose {...props} />,
  info: (props) => <MdInfo {...props} />,
  mail: (props) => <MdMail {...props} />,
};

export default icons;
