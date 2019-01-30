import React from 'react';
import { MdAdd, MdClose, MdEvent, MdInfo, MdLock, MdMail, MdSort } from 'react-icons/md';

const icons = {
  add: (props) => <MdAdd {...props} />,
  close: (props) => <MdClose {...props} />,
  event: (props) => <MdEvent {...props} />,
  info: (props) => <MdInfo {...props} />,
  lock: (props) => <MdLock {...props} />,
  mail: (props) => <MdMail {...props} />,
  sort: (props) => <MdSort {...props} />,
};

export default icons;
