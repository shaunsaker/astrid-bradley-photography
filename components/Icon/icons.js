import React from 'react';
import { MdAdd, MdClose, MdEdit, MdEvent, MdInfo, MdLock, MdMail, MdSort } from 'react-icons/md';

const icons = {
  add: (props) => <MdAdd {...props} />,
  close: (props) => <MdClose {...props} />,
  edit: (props) => <MdEdit {...props} />,
  event: (props) => <MdEvent {...props} />,
  info: (props) => <MdInfo {...props} />,
  lock: (props) => <MdLock {...props} />,
  mail: (props) => <MdMail {...props} />,
  sort: (props) => <MdSort {...props} />,
};

export default icons;
