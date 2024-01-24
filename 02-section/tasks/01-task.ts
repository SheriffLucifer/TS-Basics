// 1. Создайте 3 массива: массив из имен 3 ваших
// лучших друзей, массив из их возрастов, массив
// в котором будет указано есть ли у них автомобиль
// 2. Укажите в явной тип массивов
// 3. Заполните данные

const friends: string[] = ["Fedya", "Dimon", "Yura", "Alexandr"];
const ages: number[] = [38, 38, 38, 40];
const hasCar: boolean[] = [true, true, true, true];

// 4. Добавьте в каждый из массивов информацию
// о вашем четвертом друге

// 5. Раскомментируйте строки ниже исправьте их
// таким образом чтобы не возникало ошибок

friends.push("Ваня");
ages.push(22);
hasCar.push(true);

// 6. Создайте кортеж массивов, перенесите данные
// о ваши друзьях в него

const firstFriend: [string, number, boolean] = ["Fedya", 38, true];
const secondFriend: [string, number, boolean] = ["Dimon", 38, true];
const thirdFriend: [string, number, boolean] = ["Yura", 38, true];
const fourthFriend: [string, number, boolean] = ["Alexandr", 40, true];
