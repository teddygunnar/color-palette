import tinycolor from "tinycolor2";

export const getBrightness = (color: string) => {
  const rgb = tinycolor(color).toRgb();
  const { r, g, b } = rgb;

  const _brightness = (r * 299 + g * 587 + b * 114) / 1000;
  const determineBrightness = _brightness < 190 ? "light" : "dark";

  return determineBrightness;
};
