export default function createInt8TypedArray(length, index, value) {
  const uint8 = new Int8Array(length);
  if (index >= uint8.length) {
    throw new Error('Position outside range');
  }
  uint8[index] = value;
  return (
    `DataView {
          byteLength: ${uint8.byteLength},
          byteOffset: ${uint8.byteOffset},
          buffer: ArrayBuffer {
              [Uint8Contents]: ${uint8},
              byteLength: ${uint8.byteLength}
          }  
        }`
  );
}
