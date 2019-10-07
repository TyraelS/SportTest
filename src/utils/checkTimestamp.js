export default function checkTimestamp(oldStamp, newStamp) {
  if (oldStamp && newStamp) {
    return oldStamp <= newStamp;
  }
  return true;
}
