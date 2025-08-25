export default function cleanSet(set, startString) {
  if (startString === '') {
    return '';
  }
  var start = true;
  var text = '';
  set.forEach(value => {
    if (value.startsWith(startString)) {
      if (start) {
        text += value.slice(startString.length);
        start = false;
      }
      else {
        text += '-' + value.slice(startString.length);
      }
    }
  })
  return text;
}
