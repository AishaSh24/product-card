// Задание №4. email: 'введенная почта'

const emailFrom = document.getElementById('email-from');

emailFrom.addEventListener('submit', function(event) {
  event.preventDefault();
  const from = event.target;
  const fromData = new fromData(from);
  const data = Object.fromEntries(fromData.entries());
  console.log(data);
})
//console.log('Ты подписан!')


// Задание №5. Создаем кнопку регистрации

const registrationBtn = document.getElementById('open-modal-btn');
const registrationModal = document.getElementById('modal-window');
const closeBtn = document.getElementById('close-modal-btn');

function openModal() {
  registrationModal.classList.add('modal-showed');
}

registrationBtn.addEventListener('click', openModal);

function closeModal() {
  registrationModal.classList.remove('modal-showed');
}

closeBtn.addEventListener('click', closeModal);


// Задание №6. Добавляем модальное окно с полями:Ф.И., почта

let user = null;

const userForm = document.getElementById('registrationForm');

userForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const password = userForm.password.value;
  const confirmPassword = userForm['confirm-password'].value;
  const passwordsMatch = (password === confirmPassword);
  const isFormValid = userForm.checkValidity();
    if (!isFormValid || !passwordsMatch) {
      alert('Не правильный ввод! Исправь!');
      return;
    }

  const fromData = {
    name: userForm.name.value,
    surname: userForm.surname.value,
    'date-of-birth': userForm['date-of-birth'].value,
    login: userForm.login.value,
    password: userForm.password.value,
    createdOn: new Date()
  };

  user = fromData;

  console.log('Твои данные:', user);
  alert('Ты зарегистрирован! Вся информация о тебе в консоли.');

  closeModal();

});

