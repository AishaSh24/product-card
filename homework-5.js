
//Указываем город и температуру по Цельсию

function showWeather(city, temp) {
  console.log(`сейчас в городе ${city} температура - ${temp} градусов по Цельсию`);
  console.log(`сейчас в городе ${city} температура - ${temp} градусов по Цельсию`);
}

showWeather('Мекка', 35);
showWeather('Дамаск', 20);


//Создаем фукнцию, которая хранит внутри себя скорость света

const LIGHT_SPEED = 299792458;

function compareSpeed(speed) {
  if (speed > LIGHT_SPEED) {
    console.log('Сверхсветовая скорость');
  } else if (speed < LIGHT_SPEED) {
    console.log('Субсветовая скорость');
  } else {
    console.log('Скорость света');
  }
}

compareSpeed(300000000);
compareSpeed(20500);
compareSpeed(299792458);


//Создаем переменную для магазина

const productName = 'Мобильный телефон'
const productPrice = 125;

function buyProduct(myBudget) {
  if (myBudget >= productPrice) {
    console.log('{Мобильный телефон} товар приобретен: Спасибо за покупку!');
  } else {
    let debt = productPrice - myBudget;
    console.log('Вам не хватает 125$, пополните счет на карте');
  }
}

buyProduct(185);
buyProduct(65);


//Для улучшения аналитичеких способностей создаем функцию и три переменных

const myName = 'Айша';
const myAge = 40;
const iAmFromIsSibiria = true;

function showMyInfo() {
  console.log('Мое имя: Айша');
  console.log('Возраст: 40');
  console.log('Откуда родом: Сибирь');
}

showMyInfo();


