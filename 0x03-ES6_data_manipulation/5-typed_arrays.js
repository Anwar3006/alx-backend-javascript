export default function createInt8TypedArray(length, index, value) {
  const uint8 = new Int8Array(length);
  if (index >= uint8.length) {
    throw new Error('Position outside range');
  }
  const buf = new DataView(new ArrayBuffer(length), 0, length);
  buf.setInt8(index, value);
  return buf;
}
