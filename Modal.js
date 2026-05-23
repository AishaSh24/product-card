export class Modal {
  constructor(modalWindow) {
    this.modalElement = document.getElementById(modalWindow);
    if (!this.modalElement) {
      console.error('Модальный элемент с ID "${modalWindow}" не найден.');
      return;
    }

    this.closeModal = this.modalElement.querySelector('.close-modal');

    this.setupCloseModal();
    this.setOutsideClickListener();
  }

//внутренний метод для настройки слушателя на кнопку закрытия
  setupCloseModal() {
    if (this.closeModal) {
      this.closeModal.addEventListener('click', () => this.close());
    } else {
      console.warn(`Для модального окна с ID "${this.modalElement.id}" не найдена кнопка закрытия с классом '.close-modal'.`);
    }
  }

// Закрытие вне модального окна
setOutsideClickListener() {
  this.modalElement.addEventListener('click', (event) => {
    if (event.target === this.modalElement) {
      this.close();
    }
  });
}


// Для открытия модального окна
  open() {
    if (this.modalElement) {
      this.modalElement.classList.add('modal-showed');
      document.body.classList.add('no-scroll');

      console.log(`Модальное окно ${this.modalElement.id} открыто.`);
    }
  }


  //Для закрытия модального окна
  close() {
    if (this.modalElement) {
      this.modalElement.classList.remove('modal-showed');
      document.body.classList.remove('no-scroll');
      
      console.log(`Модальное окно ${this.modalElement.id} закрыто.`);
    }
  }


// Метод для проверки состояния модалльного окна
  checkStatus() {
    return this.modalElement ? this.modalElement.classList.contains('modal-showed') : false;
  }
}

