const APP_CONTAINER = document.getElementById('app-container');
const GET_ALL_USERS_BTN = document.getElementById('getAllUsersBtn');
const CLEAR_ALL_USERS_BTN = document.getElementById('clearAllUsersBtn');
const LOCAL_STORAGE_KEY = 'usersData';

function displayMessage(message, isError = false) {
  APP_CONTAINER.innerHTML = `<p class ="message ${isError ? 'error-message' : ''}">${message}</p>`;
}


function saveToLocalStorage(users) {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(users));
}


function getUsersFromLocalStorage() {
  const data = localStorage.getItem(LOCAL_STORAGE_KEY);
  return data ? JSON.parse(data) : null;
}


function renderUserCards(users) {
  APP_CONTAINER.innerHTML = '';

  if (!users || users.length === 0) {
    displayMessage("Нет пользователей для отображения!");
    return;
  }

  users.forEach(user => {
    const userCard = document.createElement('div');
    userCard.className = 'user-card';
    userCard.setAttribute('data-id', user.id);

    userCard.innerHTML = `
    <h3>${user.name} ${user.surname}</h3>
    <p><strong>Email:</strong> ${user.email}</p>
    <p><strong>Возраст:</strong> ${user.age}</p>
    ${user.city ? `<p><strong>Город:</strong> ${user.city}</p>` : ''}
    <button class="delete-card-btn" data-id="${user.id}">x<button>
    `

    const deleteCardButton = userCard.querySelector('.delete-card-btn');
    deleteCardButton.addEventListener('click', () => handleDeleteSpecificUser(user.id));

    APP_CONTAINER.appendChild(userCard);
  });
}


async function loadUsers() {
  const storedUsers = getUsersFromLocalStorage();

  if (storedUsers && storedUsers.length > 0) {
    console.log("Пользователи загружены из localStorage.");
    renderUserCards(storedUsers);
    return;
  }

  displayMessage("Данные загружаются...");

  try {
    await new Promise(resolve => setTimeout(resolve, 1000));

    const response = await fetch('users.json');
    if (!response.ok) {
      throw new Error(`HTTP ошибка: ${response.status}`);
    }
    const data = await response.json();

    if (!Array.isArray(data)) {
      throw new Error("Некорректный формат данных в JSON-файле: ожидался массив");
    }

    console.log("Пользователи усешно загружены.");
    saveToLocalStorage(data);
    renderUserCards(data);

  } catch (error) {
    //console.error("Ошибка при загрузке данных:", error);
    displayMessage(`Ошибка при загрузке данных: ${error.message}`, true);
  }
}

function handleGetUserCards() {
  const currentUsers = getUsersFromLocalStorage();
  if (currentUsers && APP_CONTAINER.children.lenght === currentUsers.lenght) {
    displayMessage("Все пользователи уже отображены.", false);
    setTimeout(() => renderUserCards(currentUsers), 2000);
    return;
  }
  loadUsers();
}

function handleDeleteSpecificUser(userId) {
  let currentUsers = getUsersFromLocalStorage();
  if (!currentUsers) {
    displayMessage("Нет пользователей для удаления.");
    return;
  }

  const updateUsers = currentUsers.filter(user => user.id !== userId);
  saveToLocalStorage(updateUsers);
  renderUserCards(updateUsers);
  console.log(`Пользователь с ID ${userId} удален.`);
}

document.addEventListener('DOMContentLoaded', () => {

  GET_ALL_USERS_BTN.addEventListener('click', handleGetUserCards);
  
  loadUsers();
});

