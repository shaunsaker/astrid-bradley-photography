import React from 'react';
import {
  MdAdd,
  MdArchive,
  MdCheck,
  MdCheckCircle,
  MdClose,
  MdEdit,
  MdErrorOutline,
  MdEvent,
  MdInfoOutline,
  MdLock,
  MdMail,
  MdMenu,
  MdPhoto,
  MdPhotoSizeSelectLarge,
  MdSave,
  MdSend,
  MdSort,
  MdUnarchive,
} from 'react-icons/md';

const icons = {
  add: (props) => <MdAdd {...props} />,
  archive: (props) => <MdArchive {...props} />,
  check: (props) => <MdCheck {...props} />,
  'check-circle': (props) => <MdCheckCircle {...props} />,
  close: (props) => <MdClose {...props} />,
  edit: (props) => <MdEdit {...props} />,
  'error-outline': (props) => <MdErrorOutline {...props} />,
  event: (props) => <MdEvent {...props} />,
  'info-outline': (props) => <MdInfoOutline {...props} />,
  layout: (props) => <MdPhotoSizeSelectLarge {...props} />,
  lock: (props) => <MdLock {...props} />,
  mail: (props) => <MdMail {...props} />,
  menu: (props) => <MdMenu {...props} />,
  photo: (props) => <MdPhoto {...props} />,
  save: (props) => <MdSave {...props} />,
  send: (props) => <MdSend {...props} />,
  sort: (props) => <MdSort {...props} />,
  unarchive: (props) => <MdUnarchive {...props} />,
};

export default icons;
