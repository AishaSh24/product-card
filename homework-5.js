
//Указываем город и температуру по Цельсию

function showWeather(city, temp) {
  console.log('сейчас в городе{Мекка} температура - {35} градусов по Цельсию');
  console.log('сейчас в городе{Дамаск} температура - {20} градусов по Цельсию');
}

showWeather('Мекка, 35');
showWeather('Дамаск', 20);


//Создаем фукнцию, которая хранит внутр  себя скорость света

const LIGHT_SPEED = 299792458;

function checkSpeed(speed) {
  if (speed > LIGHT_SPEED) {
    console.log('Сверхсветовая скорость');
  } else if (speed < LIGHT_SPEED) {
    console.log('Субсветовая скорость');
  } else {
    console.log('Скорость света');
  }
}

checkSpeed(300000000);
checkSpeed(20500);
checkSpeed(299792458);

//Создаем переменную для магазина

let productName = 'Мобильный телефон'
let productPrice = 125;

function buyProduct(myBudget) {
  if (myBudget >= productPrice) {
    console.log('{Мобильный телефон} товар приобретен: Спасибо за покупку!');
  }
  else {
    let debt = productPrice - myBudget;
    console.log('Вам не хватает 125$, пополните счет на карте');
  }
}

buyProduct(185);
buyProduct(65);