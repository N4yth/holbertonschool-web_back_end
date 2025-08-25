export default function cleanSet(set, startString) {
  if (startString === '') {
    return '';
  }
  var text = '';
  set.forEach(function(value) {
    if (value.startsWith(startString)) {
      text += value.slice(startString.length) + '-';
    }
  })
  return text.slice(0, text.length - 1);
}
