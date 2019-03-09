const mapToSelectOptions = (array) => {
  const selectOptions = array.map((item) => {
    const { name, id } = item;

    return {
      name,
      value: id,
    };
  });

  return selectOptions;
};

export default mapToSelectOptions;
