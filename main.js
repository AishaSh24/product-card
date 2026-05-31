import "./script.js";
import "./homework-5.js";
import "./homework-6.js";
import "./homework-7.js";
import "./homework-8.js";
import "./homework-9.js";
import {Modal} from "./Modal.js";
import "./Form.js";
import "./homework-11.js";



// Задание №3. Создание структуры

class Book {
  constructor(autor, name) {
    this.autor = autor;
    this.name = name;
  }

  start() {
    console.log(`${this.autor}), ${this.name} reading`)
  }
}


class AudioBook extends Book {
  constructor(autor, name, autorSound) {
    super(autor, name)
    this.autorSound = autorSound;
  }

  reproduction() {
    console.log(`${this.autor}, ${this.name}, ${this.autorSound} is being reproduced`)
  }
}

const markTwain = new Book('Mark Twain', 'Позолоченный век')
const mainReid = new Book('Main Reid', 'Всадник без головы')
markTwain.start()
mainReid.start()

const alexandrKuprin = new AudioBook('Alexander Kuprin', 'Куст сирени', 'Stanislav Shapkin')
const mihailSholohov = new AudioBook('Mihail Sholohov', 'Наука ненависти', 'Sergey Gorbunov')
alexandrKuprin.start()
mihailSholohov.start()
alexandrKuprin.reproduction()
mihailSholohov.reproduction()


// Задание №4. Создаем класс модального окна

const modalWindow = new Modal("modal-window");
document.getElementById("open-modal-btn").addEventListener('click', () => {
  modalWindow.open();
});
document.getElementById("close-modal-btn").addEventListener('click', () => {
  modalWindow.close();
});
