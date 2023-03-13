function filteredDataPath(data, path) {
  let result = [];
  data.filter((item) => item.path === path ? result.push(item) : []);

  return result[0]
}

export default filteredDataPath;