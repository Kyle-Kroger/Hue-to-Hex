export interface Ihsl {
  // number from 0-360
  hue: number;
  // number from 0-100
  saturation: number;
  // number from 0-100
  lightness: number;
}

export interface IColor {
  hex: string;
  hsl: Ihsl;
  textColor: string;
}

export interface ICheckedCharacter {
  letter: string;
  status: string;
}
