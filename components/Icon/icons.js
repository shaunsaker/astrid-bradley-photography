import React from 'react';
import {
  MdAdd,
  MdArchive,
  MdCheckCircle,
  MdClose,
  MdEdit,
  MdErrorOutline,
  MdEvent,
  MdInfoOutline,
  MdLock,
  MdMail,
  MdPhoto,
  MdPhotoSizeSelectLarge,
  MdSave,
  MdSend,
  MdShoppingCart,
  MdSort,
  MdUnarchive,
} from 'react-icons/md';

const icons = {
  add: (props) => <MdAdd {...props} />,
  archive: (props) => <MdArchive {...props} />,
  check: (props) => <MdCheckCircle {...props} />,
  close: (props) => <MdClose {...props} />,
  edit: (props) => <MdEdit {...props} />,
  'error-outline': (props) => <MdErrorOutline {...props} />,
  event: (props) => <MdEvent {...props} />,
  'info-outline': (props) => <MdInfoOutline {...props} />,
  layout: (props) => <MdPhotoSizeSelectLarge {...props} />,
  lock: (props) => <MdLock {...props} />,
  mail: (props) => <MdMail {...props} />,
  photo: (props) => <MdPhoto {...props} />,
  save: (props) => <MdSave {...props} />,
  send: (props) => <MdSend {...props} />,
  'shopping-cart': (props) => <MdShoppingCart {...props} />,
  sort: (props) => <MdSort {...props} />,
  unarchive: (props) => <MdUnarchive {...props} />,
};

export default icons;
