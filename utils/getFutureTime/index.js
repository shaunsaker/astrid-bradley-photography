const getFutureTime = (timestamp, days) => {
  const date = new Date(timestamp);
  const time = date.getTime();
  const timeFromDays = days * 24 * 60 * 60 * 1000; // hr * min * sec * ms
  const futureTime = time + timeFromDays;

  return futureTime;
};

export default getFutureTime;
