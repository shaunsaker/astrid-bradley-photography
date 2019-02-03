import React from 'react';
import {
  MdAdd,
  MdPhoto,
  MdArchive,
  MdClose,
  MdEdit,
  MdEvent,
  MdInfo,
  MdLock,
  MdMail,
  MdSave,
  MdSort,
  MdUnarchive,
} from 'react-icons/md';

const icons = {
  add: (props) => <MdAdd {...props} />,
  archive: (props) => <MdArchive {...props} />,
  close: (props) => <MdClose {...props} />,
  edit: (props) => <MdEdit {...props} />,
  event: (props) => <MdEvent {...props} />,
  info: (props) => <MdInfo {...props} />,
  lock: (props) => <MdLock {...props} />,
  mail: (props) => <MdMail {...props} />,
  photo: (props) => <MdPhoto {...props} />,
  save: (props) => <MdSave {...props} />,
  sort: (props) => <MdSort {...props} />,
  unarchive: (props) => <MdUnarchive {...props} />,
};

export default icons;
