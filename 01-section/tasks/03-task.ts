const city = "London";
const country = "Great Britain";
const region = 161;

// 1. Сравните типы переменных city и country,
// результат сравнения запишите в переменную
// isSameTypes
// 2. Приведите тип переменной region таким
// образом, чтобы результат сравнения типов
// переменных city и region был равен true,
// запишите результат сравнения в переменную
// isSameTypes

const newRegion = region.toString();
const isSameTypes: boolean =
  typeof city === typeof country || typeof city === typeof newRegion;
