import {productsCards} from "./products-8.js";

console.log("Файл homework-8.js успешно загружен!");

//. Задание №3


const productRow = document.querySelector('.product-row');
const productTemplate = document.querySelector('#product-template');

function renderAllCards() {
  productsCards.forEach((cardData) => {
    const cardElement = productTemplate.content. cloneNode(true);
    const img = cardElement.querySelector('img');
    img.src = cardData.imgSrc;
    img.alt = cardData.imgAlt;
    cardElement.querySelector('.product-category').textContent = cardData.forSkin;
    cardElement.querySelector('.product-name').textContent = cardData.title;
    cardElement.querySelector('.product-discription').textContent = cardData.discription;

    const compoundList = cardElement.querySelector('.product-compound');
    cardData.compound.forEach((item) => {
      const li = document.createElement('li');
      li.textContent = item;
      compoundList.append(li);
    });

    cardElement.querySelector('.product-price').textContent = `${cardData.price} ${cardData.currency}`;
    productRow.append(cardElement);
  });
} 

renderAllCards(productsCards);


// Задание №4. Получение массива объектов через метод reduce.

const productMap = productsCards.reduce((acc, cardData) => {
  acc[cardData.title] = cardData.discription;
  return acc;
}, {});

console.log(productMap)

// Задание %5. Функции запроса количества и рендеринга карточек.

function getCardsCount() {
  const answer = prompt('Сколько карточек отобразить? (Введи число от 1 ДО 5)');
  const count = Number(answer);

  if (count >= 1 && count <= 5) {
    return count;
  } else {
    alert('Ошибка! Введите число от 1 до 5.');
    return 5;
  }
}

function renderCards (productsCards, count) {
  productRow.innerHTML = "";

  productsCards.slice(0, count).forEach(cardData => {
    productRow.append(renderAllCards(cardData));
  });
}

const count = getCardsCount();
renderCards(productsCards, count);