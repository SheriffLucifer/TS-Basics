// Перепешите интерфейс ICustomer разбив его
// на отдельные подинтерфейсы. Структуру и нейминг
// полей вы можете менять на свое усмотрение.

enum paymentType {
  "cash",
  "card",
  "credit",
}

interface ICustomer {
  firstName: string;
  lastName: string;
  dateBirthday: Date;
  deliveryCountry: string;
  deliveryCity: string;
  deliveryAddress: string;
  deliveryBuilding: number | string;
  deliveryApartment?: number;
  detiveryTime?: string;
  paymentType: paymentType;
  ordersCount: number;
  discountPercent: number;
  currency: "EUR" | "USD" | "RUB";
}

interface ICustomerName {
  name: string;
  surname: string;
  dateBirthday: Date;
}

interface ICustomerDelivery {
  country: string;
  city: string;
  address: string;
  building: string | number;
  apartment?: number;
  deliberyTime?: string;
}

interface ICustomerDetailsOrder {
  payment: paymentType;
  orders: number;
  discount: number;
  currency: "EUR" | "USD" | "RUB";
}
