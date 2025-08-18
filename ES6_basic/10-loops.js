export default function appendToEachArrayValue(array, appendString) {
  const iterableObj = {
    *[Symbol.iterator]() {
      yield* Object.entries(array);
    },
  };

  for (const [key, val] of iterableObj) {
    array[key] = appendString + val;
  }

  return array;
}
