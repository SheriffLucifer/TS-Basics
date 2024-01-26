enum ResistorColor {
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

function resistorValue(
  firstColor: ResistorColor,
  secondColor: ResistorColor
): number {
  let value = firstColor * 10 + secondColor;
  return value;
}
