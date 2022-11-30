export default function contains(store, product) {
  for (const container in store) {
    if (typeof store[container] === 'object') {
      if (contains(store[container], product)) return true;
    } else {
      if (store[container] === product) return true;
    }
  }
  return false;
}
