// Задание №1. Реализовать абстрактный класс напитков.

class Drink {
  #temperature;

  constructor(name, size, price, temperature) {
    if (this.constructor === Drink) {
      throw new Error("Нельзя создавать экземпляры абстрактного класса Drink!");
    }
    this.name = name;
    this.size = size;
    this.price = price;
    this.#temperature = temperature;
  }


  //Общий метод для всех напитков:

  getInfo() {
    return `Напиток: ${this.name} | Объем: ${this.size} | Цена: ${this.price} руб' | Температура: ${this.#temperature}°C`;
  }


  //Метод для получения темп. (так как она приватная)
  
  getTemperature() {
    return `Текущая температура: ${this.#temperature} °C`;
  }

setTemperature(newTemp) {
  if (typeof newTemp !== 'number' || newTemp < 10 || newTemp > 80) {
    throw new Error('Некорректная температура: ${newTemp}');
  }
  this.#temperature = newTemp;
}

  #prepare() {
    console.log(`Готовим "${this.name}"...`);
  }

  serve() {
    this.#prepare();
    console.log(`"${this.name}" готово! Температура: ${this.getTemperature()}°C`);
  }
}

  //  Наследники:

class Coffee extends Drink {
  constructor(name, size, price, beanType, milkType) {
    super(name, size, price, 90);
    this.beanType = beanType;
    this.milkType = milkType;
  }
  getInfo() {
    return `${super.getInfo()} | Beans: ${this.beanType} | Milk: ${this.milkType}`;
  }
}

class Tea extends Drink {
  constructor(name, size, price, teaType, withMilk) {
    super(name, size, price, 85);
    this.teaType = teaType;
    this.withMilk = withMilk;
  }
  getInfo() {
    const milk = this.withMilk ? 'с молоком' : 'без молока';
    return `${super.getInfo()} | Тип: ${this.teaType} | ${this.milkType}`;
  }
}

class Lemonade extends Drink {
  constructor(name, size, price, flavor, withIce) {
    super(name, size, price, 5);
    this.flavor = flavor;
    this.withIce = withIce;
  }
  getInfo() {
    const ice = this.withIce ? 'со льдом' : 'безо льда';
    return `${super.getInfo()} | Вкус: ${this.flavor} | ${ice}`;
  }
}

class HotChocolate extends Drink {
   constructor(name, size, price, chocolateType, withCream) {
    super(name, size, price, 70);
    this.chocolateType = chocolateType;
    this.withCream = withCream;
  }
  getInfo() {
    const cream = this.withCream ? 'со сливками' : 'без сливок';
    return `${super.getInfo()} | Шоколад: ${this.chocolateType} | ${cream}`;
  }
}


// Класс "Кафе".

class Cafe {
  constructor(name, location) {
    this.name = name;
    this.location = location;
  }

  getInfo() {
    console.log(`\Кафе: "${this.name}" | Адрес: ${this.location}`);
  }
  orderDrink(drink) {
    console.log(`\--- Заказ в "${this.name}" ---`);
    console.log(drink.getInfo());
    drink.serve();
  }
}

const cafe = new Cafe ('Северное Сияние', 'ул. Луначарского, д. 2а');
cafe.getInfo();

const cappuccino = new Coffee('Капучино', 300, 350, 'Арабика', 'Коровье');
const blackTea = new Tea('Черный чай',300, 200, 'Черный', true);
const lemonade = new Lemonade('Лимонад из гуавы', 350, 300, ['Гуава'], true);
const hotChocolate = new HotChocolate('Горячий шоколад', 300, 350, 'Темный с молоком', true);

cafe.orderDrink(cappuccino);
cafe.orderDrink(blackTea);
cafe.orderDrink(lemonade);
cafe.orderDrink(hotChocolate);

console.log('Температура до:', blackTea.getTemperature() + '°С');
blackTea.setTemperature(65);
console.log('Температура после  setTemperature(65):', blackTea.getTemperature() + '°C');


