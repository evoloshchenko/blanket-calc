export function calculateBlanketStitches(
  gaugeStitches,
  gaugeWidth,
  blanketWidth
) {
  return Math.ceil((gaugeStitches / gaugeWidth) * blanketWidth);
}

export function calculateBlanketRows(gaugeRows, gaugeLength, blanketLength) {
  return Math.ceil((gaugeRows / gaugeLength) * blanketLength);
}
