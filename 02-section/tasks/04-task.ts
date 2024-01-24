enum auto {
  Mercedes = "mercedes",
  BMW = "bmw",
  Tesla = "tesla",
  Null = null,
}

let cars: auto | null = null;

// Используя Enum укажите переменной cars
// такой тип при котором она может принимать
// следующие значения: "mercedes", "bmw", "tesla",
// null.
// Код ниже должен вызвать ошибку

cars = "nissan";
