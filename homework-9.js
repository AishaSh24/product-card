import {Modal} from "./Modal.js";
import {Form} from "./Form.js";

// Задание №4. email: 'введенная почта'

const emailFromInstance = new Form('email-from');
const htmlEmailFrom = emailFromInstance.formElement;
if (htmlEmailFrom) {
  htmlEmailFrom.addEventListener('submit', function(event) {
    event.preventDefault();
    
    if (emailFromInstance.isValid()) {
      const data = emailFromInstance.getValues();
      console.log('Данные подписки:', data);
      alert(`Ты подписан на рассылку с почтой: ${data.email || 'Неизвестно'}`);
      emailFromInstance.resert();
    } else {
      alert('Пожалуйста, введите коректный email для подписки.');
    }
  });
} else {
  console.error('HTML-элемент формы (ID "email-from") подписки не найден.');
}
console.log('Ты подписан!');

//console.log('Ты подписан!')


// Задание №5. Создаем кнопку регистрации

const openModalBtnInstance = new Modal('modal-window');
const openModalBtn = document.getElementById('open-modal-btn');
if (openModalBtn) {
  openModalBtn.addEventListener('click', () => {
    openModalBtnInstance.open();
  });
} else {
  console.error('Кнопка открытия модального окна (ID "open-modal-btn") не найдена.');
}


// Задание №6. Добавляем модальное окно с полями:Ф.И., почта

let user = null;

const registrationFormInstance = new Form('registrationForm');
const htmlRegistrationForm = registrationFormInstance.formElement;

if (htmlRegistrationForm) {
  htmlRegistrationForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = registrationFormInstance.getValues();

    const isBrowserValid = registrationFormInstance.isValid();

    const password = formData.password;
    const confirmPassword = formData['confirm-password'];
    const passwordsMatch = (password === confirmPassword);

    if (!isBrowserValid || !passwordsMatch) {
      alert('Неправильный ввод! Пожалуйста, убедитесь, что пароли совпадают!');
      return;
    }

    formData.createdOn = new Date();

    user = formData;

    console.log('Твои данные:', user);
    alert('Ты зарегистрирован! Вся информация о тебе в консоли.');

    openModalBtnInstance.close();
    registrationFormInstance.reset();
  });
} else {
  console.error('HTML-элемент формы регистрации (ID "registrationForm") не найден.');
}

const resetGetBtn = document.getElementById('resetGetBtn');
if (resetGetBtn) {
  resetGetBtn.addEventListener('click', () => {
    registrationFormInstance.reset();
    console.log('Форма регистрации сброшена.');
  });
}

  