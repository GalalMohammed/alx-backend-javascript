export default function createInt8TypedArray(length, position, value) {
  const dv = new DataView(new ArrayBuffer(length));

  if (position >= length || position < 0) {
    throw Error('Position outside range');
  }
  dv.setInt8(position, value);
  return dv;
}
