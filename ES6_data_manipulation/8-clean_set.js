export default function cleanSet(set, startString) {
  if (!startString || startString === '') {
    return '';
  }
  let start = true;
  let text = '';
  set.forEach(value => {
    if (typeof value === 'string') {
      if (value.startsWith(startString)) {
        if (start) {
          text += value.substring(startString.length);
          start = false;
        }
        else {
          text += '-' + value.substring(startString.length);
        }
      }
    }
  })
  return text;
}
