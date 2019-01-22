const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const getPrettyDate = (timestamp) => {
  const date = new Date(timestamp);
  const day = date.getDate();
  const month = date.getMonth();
  const monthString = months[month];
  const year = date.getFullYear();
  const prettyDate = `${day} ${monthString} ${year}`;

  return prettyDate;
};

export default getPrettyDate;
