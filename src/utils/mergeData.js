export default function mergeData(prevData, nextData) {
  return prevData.mergeWith((oldVal, newVal) => {
    if (parseInt(oldVal.get('version')) < parseInt(newVal.get('version')))
      return newVal;
    else return oldVal;
  }, nextData);
}
