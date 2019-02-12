const getFutureTime = (timestamp, days) => {
  const timeFromDays = days * 24 * 60 * 60 * 1000; // hr * min * sec * ms
  const futureTime = timestamp + timeFromDays;

  return futureTime;
};

export default getFutureTime;
