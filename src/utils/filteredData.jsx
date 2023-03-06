function filteredData(data, type) {
  let result = [];
  data.filter((item) => item.type === type ? result.push(item) : []);

  return result
}

export default filteredData;