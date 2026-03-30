import {comments} from './comments.js'

//1. Создаем массив из чисел 1-10

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const filteredNumbers = numbers.filter(num => num >= 5);
console.log(filteredNumbers);


//2. Создаем массив строк, относящихся к любой сущности

const educationalSubjects = [
  'Математика',
  'Биология',
  'География',
  'Физика',
  'Химия',
  'История'
]
const hasMath = educationalSubjects.includes('Математика');
console.log(hasMath);


//3. Пишем функцию, которая будет применять массив и изменять его порядок напротивоположный

function reverseArray(array) {
  return array.reverse();
}

// Используем ее для 1го задания

const reversedNumbers = reverseArray(filteredNumbers);
console.log(reversedNumbers);

// Используем ее для 2го задания

const reversedSubjects = reverseArray(educationalSubjects);
console.log(reversedSubjects);



//Уровень 2.
//1. Фильтруем объекты массива, почта которых содержит 'com'

const comEmails = comments.filter(item => item.email.includes('.com'));
console.log(comEmails);


//2. Перебираем массив 

const updatedComments = comments.map(item => {
  return {
    ...item,
    postId: item.id <= 5 ? 2 : 1
  };
});


//3. Перебираем массив, оставляем только id и имя

const shortComments = comments.map(item => {
  return {
    id: item.id,
    name: item.name
  };
});


//4. Перебираем массив и добавляем свойство isInvalid

const validatedComments = comments.map(item => {
  return {
    ...item,
    isInvalid: item.body.lenght > 180
  };
});

console.log(validatedComments);


//Уровень 3.
//1. Используем массив reduce

// используем map

const emailsByMap = comments.map(item => item.email);


// используем reduce

const emailByReduce = comments.reduce((acc, item) => {
  acc.push(item.email);
  return acc;
}, []);


//2. Используем toString(), join()

const string1 = emailsByMap.toString();

const string2 = emailsByMap.join(', ');

