export default function cleanSet(set, startString) {
  if (startString && typeof startString === 'string') {
    let result = '';
    Array.from(set).filter((item) => typeof item === 'string' && item.startsWith(startString)).forEach((item) => {
      if (result) {
        result += '-';
      }
      result += item.slice(startString.length);
    });
    return result;
  }
  return '';
}
