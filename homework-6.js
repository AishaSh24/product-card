//1. Создаем объект на основе моих данных

const myProfile = {
  firstName: 'Айша',
  surName: 'Слинкина',
  email: 'aishaSh@gmail.com',
  job: 'учитель арабского языка',
  age: '40 лет',
  contry: 'Россия',
  nationality: 'русская',
  status: 'в разводе',
  child: '6 детей',
  dream: 'переехать'
};

console.log(myProfile)

//2. Созданм карточку "авто" и связываем обе карточки

const myCar = {
  brand: 'Toyota',
  model: 'Camry',
  year: '2024',
  color: 'white',
  gearbox: 'auto'
}

myCar.owner = myProfile;

console.log(myCar)


//3. Проверяем скоростьт в объекте №2

function addMaxSpeed(car) {
  if (!car.addMaxSpeed) {
    car.maxSpeed = 280;
  }
}
addMaxSpeed(myCar);


//4. Пишем функцию, которая выводит свойства аргумента и его значение

function showObjectInfo(obj, key) {
  console.log(obj[key]);
}

showObjectInfo(myCar, 'brand');
showObjectInfo(myCar, 'color');


//5. Список продуктов (массив)

const product = [
  'словарь ар-рус языка',
  'тетрадь общая 98л',
  'пенал д/девочки',
  'ручки гелевые цв',
  'карандаши цв'
];


//6. Cоздаем массив из объектов-книг

const myLibrary = [
  {
    title: 'Белый клык',
    author: 'Джек Лондон',
    year: 1906,
    coverColor: 'Коричневый',
    genre: 'Приключения'
  },
  {
    title: 'Обитетали холмов',
    author: 'Ричард Адамс',
    year: 1972,
    coverColor: 'Зеленая',
    genre: 'Фантастика'
  },
  {
    title: 'Всадник без головы',
    author: 'Томас Майн Рид',
    year: 1865,
    coverColor: 'Синяя',
    genre: 'Роман'
  },
];

myLibrary.push({
  title: 'Война и мир',
  author: 'Лев Толсттой',
  year: 1873 ,
  coverColor: 'Зеленая',
  genre: 'Роман-эпопея'
});

console.log(myLibrary)


//7. Создаем массив из книг одной серии

const carolineKeenBooks = [
  {
    title: 'Тайна старой часовни',
    author: 'Каролина Кин',
    year: 1930,
    coverColor: 'Темно-красный',
    genre: 'Детектив'
  },
  {
    title: 'Тайна скрытой лестницы',
    author: 'Каролина Кин',
    year: 1930,
    coverColor: 'Бирюзовый',
    genre: 'Детектив'
  },
  {
    title: 'Тайна пустой рамы',
    author: 'Каролина Кин',
    year: 1930,
    coverColor: 'Светло-зеленый',
    genre: 'Детектив'
  },
  {
    title: 'Тайна серебрянного креста',
    author: 'Каролина Кин',
    year: 1930,
    coverColor: 'Розово-фиолетовый',
    genre: 'Детектив'
  },
  {
    title: 'Тайна железного ящичка',
    author: 'Каролина Кин',
    year: 1931,
    coverColor: 'Золотисто-коричневый',
    genre: 'Детектив'
  },
];

const allBooks = [...myLibrary, ...carolineKeenBooks];


//8. Создаем функцию, принимающую массив сущностей с предыдущего задания

function getRareBooks(allBooksArray) {
  return allBooksArray.map(book => ({
    ...book,
    isRare: book.year < 1950 ,
  }));
};

const finalLibrary = getRareBooks(allBooks);
console.log(finalLibrary)

