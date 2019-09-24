export default function checkTimestamp(oldStamp, newStamp) {
  if (oldStamp) {
    return oldStamp <= newStamp;
  }
  return true;
}
