export class Sock {
  constructor(
    gaugeStitches,
    gaugeRows,
    gaugeWidth,
    gaugeLength,
    footSize,
    footCircum,
    heelDiagonal,
    calfCircum
  ) {
    this.gaugeStitches = gaugeStitches / gaugeWidth;
    this.gaugeRows = gaugeRows / gaugeLength;
    this.gaugeWidth = gaugeWidth;
    this.gaugeLength = gaugeLength;
    this.footSize = footSize;
    this.footCircum = footCircum;
    this.heelDiagonal = heelDiagonal;
    this.calfCircum = calfCircum;
  }

  get stitches() {
    const measure = Math.ceil(this.gaugeStitches * this.footCircum * 0.9);
    if (measure % 2 == 0) return measure;
    else return measure + 1;
  }

  get gussetStitches() {
    const measure1 = Math.ceil(this.heelDiagonal * 0.9 * this.gaugeStitches);
    if (measure1 % 2 == 0) return measure1;
    else return measure1 + 1;
  }

  get heelFlapStitches() {
    return Math.round(this.stitches / 2);
  }

  get instepStitches() {
    return Math.round(this.stitches / 2);
  }

  get remainHeelFlapStitches() {
    return Math.ceil(this.heelFlapStitches / 2 + 2);
  }

  get stitchesBeforePickHeelFlap() {
    return Math.ceil(this.stitches * 0.75 + 2);
  }

  get pickHeelFlapStitches() {
    return Math.ceil(
      (this.gussetStitches - this.stitchesBeforePickHeelFlap) / 2
    );
  }

  get heelFlapLength() {
    return Math.ceil(this.pickHeelFlapStitches / this.gaugeStitches);
  }

  get decreaseGussetStitches() {
    return Math.ceil(this.gussetStitches - this.stitches);
  }

  get socksLength() {
    return Math.ceil(this.footSize * this.gaugeRows);
  }

  get decreaseToeStitches() {
    return Math.ceil(this.stitches - 16);
  }

  get toeStitches() {
    return Math.ceil(this.stitches - this.decreaseToeStitches);
  }

  get toeRows() {
    return Math.ceil(this.decreaseToeStitches / 2);
  }

  get toeLength() {
    return Math.ceil(this.toeRows / this.gaugeRows);
  }
}
