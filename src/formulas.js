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









export function calculatePickHeelFlapStitches(heelDiagonal, gaugeStitches ) {}









export function calculateSocksStitches(gaugeStitches, footCircum) {
  return Math.ceil(gaugeStitches * footCircum * 0.9);
}


export function calculateGussetStitches(gaugeStitches, heelDiagonal) {
  return Math.ceil(heelDiagonal * 0.9 * gaugeStitches);
}

export function calculateHeelFlapStitches(gaugeStitches, footCircum) {
  return Math.floor((gaugeStitches * footCircum * 0.9) / 2);
}

export function calculateInstepStitches(gaugeStitches, footCircum) {
  return Math.floor((gaugeStitches * footCircum * 0.9) / 2);
}