export default function createInt8TypedArray(length, position, value) {
  const int8Array = new Int8Array(new ArrayBuffer(length));

  if (position >= length || position < 0) {
    throw Error('Position outside range');
  }
  int8Array[position] = value;
  return int8Array;
}
