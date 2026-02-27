console.log("hello word");

//. добавляем кнопку: "Изменить цвет первой карточки"

const recolorFirstCardButton = document.getElementById('recolor-first-card-button');
const firstCardContainer = document.querySelector('.card-container');
const bruzHashColor ='#bcdee9';

recolorFirstCardButton.addEventListener ('click', () => {
  firstCardContainer.style.backgroundColor = bruzHashColor;
});


//. добавляем кнопку: "изменить цвет всех карточек"

const greyHashColor ='#5b8b9b';

const recolorAllCardButton = document.getElementById('recolor-all-card-button');
const cardContainer = document.querySelectorAll('.card-container');
recolorAllCardButton.addEventListener('click', () => {
  cardContainer.forEach(
    card => card.style.backgroundColor = greyHashColor
  );
});


//. добавляем кнопку: "Покрась меня"

document.addEventListener('DOMContentLoaded', function() {
  const colorMeButton = document.getElementById('color-me-button');
  if (colorMeButton) {
    colorMeButton.addEventListener ('click', function() {
this.classList.toggle('active-color');
      console.log('Статус переключен!');
    });
  };
});


//. добавляем кнопку: "Перейти в Google"

const openGoogleButton = document.getElementById('open-google-button');
openGoogleButton.addEventListener('click', openGoogle);

function openGoogle() {
  const answer = confirm('Вы действительно хотите перейти на сайт Google?');
  if (answer === true) {
    window.open('https://google.com');
  } else {
    console.log('Пользователь отменил действие');
  };
};


//. выводим текст в консоль

const mainHeading = document.querySelector('.product-selection-title');
mainHeading.addEventListener('mouseenter', (event) => {
  console.log(mainHeading.textContent);
});

