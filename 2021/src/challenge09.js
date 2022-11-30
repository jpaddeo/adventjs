export default function groupBy(collection, it) {
  const result = {};
  collection.forEach((item) => {
    let index = 0;
    if (typeof it === 'function') {
      index = it(item);
    } else {
      index = item[it];
    }
    if (!result[index]) {
      result[index] = [];
    }
    result[index].push(item);
  });
  return result;
}
