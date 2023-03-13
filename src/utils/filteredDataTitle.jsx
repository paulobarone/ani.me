function filteredDataTitle(data, title) {
  let result = [];
  data.filter((item) => item.title === title ? result.push(item) : []);

  return result
}

export default filteredDataTitle;