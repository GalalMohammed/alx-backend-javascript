export default function cleanSet(set, startString) {
  if (startString) {
    let result = '';
    Array.from(set).filter((item) => item.startsWith(startString)).forEach((item) => {
      if (result) {
        result += '-';
      }
      result += item.slice(startString.length);
    });
    return result;
  }
  return '';
}
