export default function updateUniqueItems(myMap) {
  if (!(myMap instanceof Map)) {
    throw new Error('Cannot process');
  }
  myMap.forEach((key, value) => {
    if (value === 1) {
      myMap.set(key, 100);
    }
  });
}
