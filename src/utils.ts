import { IColor, Ihsl } from "./types";

export const sample = (arr: []) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

export const range = (
  start: number,
  end: number | undefined = undefined,
  step = 1
) => {
  let output = [];
  if (typeof end === "undefined") {
    end = start;
    start = 0;
  }
  for (let i = start; i < end; i += step) {
    output.push(i);
  }
  return output;
};

//Calulate color contrast
export const getContrastYIQ = (hexcolor: string) => {
  let r = parseInt(hexcolor.substr(0, 2), 16);
  let g = parseInt(hexcolor.substr(2, 2), 16);
  let b = parseInt(hexcolor.substr(4, 2), 16);

  let yiq = (r * 299 + g * 587 + b * 114) / 1000;

  return yiq >= 128 ? "#000" : "#fff";
};

//Convert HEX to HSL (wants hex value with # sign)
export const hexToHSL = (H: string): Ihsl => {
  // Convert hex to RGB first
  let r: any = 0,
    g: any = 0,
    b: any = 0;
  if (H.length == 4) {
    r = "0x" + H[1] + H[1];
    g = "0x" + H[2] + H[2];
    b = "0x" + H[3] + H[3];
  } else if (H.length == 7) {
    r = "0x" + H[1] + H[2];
    g = "0x" + H[3] + H[4];
    b = "0x" + H[5] + H[6];
  }
  // Then to HSL
  r /= 255;
  g /= 255;
  b /= 255;

  // Find greatest and smallest channel values
  let cmin = Math.min(r, g, b),
    cmax = Math.max(r, g, b),
    delta = cmax - cmin,
    h = 0,
    s = 0,
    l = 0;

  // Calulate the hue
  // No difference
  if (delta == 0) h = 0;
  // Red is max
  else if (cmax == r) h = ((g - b) / delta) % 6;
  // Green is max
  else if (cmax == g) h = (b - r) / delta + 2;
  // Blue is max
  else h = (r - g) / delta + 4;

  h = Math.round(h * 60);

  // Make negative hues positive if behind 360°
  if (h < 0) h += 360;

  // Calculate lightness
  l = (cmax + cmin) / 2;

  // Calculate Saturation
  s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

  //Convert to percent
  s = +(s * 100).toFixed(0);
  l = +(l * 100).toFixed(0);

  return { hue: h, saturation: s, lightness: l };
};

//Get Random Color
export const getRandomColor = (): IColor => {
  const hex = Math.floor(Math.random() * 16777215).toString(16);
  const hsl = hexToHSL(`#${hex}`);
  const textColor = getContrastYIQ(hex);
  return { hex, hsl, textColor };
};
