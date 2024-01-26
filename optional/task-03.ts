enum ResistorColors {
  black = 0,
  brown = 1,
  red = 2,
  orange = 3,
  yellow = 4,
  green = 5,
  blue = 6,
  violet = 7,
  grey = 8,
  white = 9,
}

function resistorValues(colors: [ResistorColors, ResistorColors]): number {
  let [firstColor, secondColor] = colors;
  let value = firstColor * 10 + secondColor;
  return value;
}
