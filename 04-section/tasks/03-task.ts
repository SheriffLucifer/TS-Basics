// Доработайте интерфейс таким образом
// Чтобы бренд и модель авто могли быть указаны лишь
// один раз. А ownerName было опциональным

interface ICar {
  brand: string;
  model: string;
  hp: number;
  registrationNumber: string;
  ownerName?: string;
}

type UniqueCar = Record<string, Record<string, ICar>>;
