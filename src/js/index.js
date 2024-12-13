'use strict';

const API_KEY = '5d066958a60d315387d9492393935c19';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

const getWeather = async (city) => {
  const url = `${BASE_URL}?q=${city}&units=metric&APPID=${API_KEY}`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Помилка: ${response.status}`);

    const data = await response.json();
    displayWeather(data);
  } catch (error) {
    displayError(error.message);
  }
};

const displayWeather = (data) => {
  const weatherContainer = document.getElementById('weather');

  const { temp } = data.main;
  const { pressure } = data.main;
  const { description } = data.weather[0];
  const { humidity } = data.main;
  const windSpeed = data.wind.speed;
  const windDeg = data.wind.deg;
  const iconCode = data.weather[0].icon;

  weatherContainer.innerHTML = `
        <h2 class="mb-3">${data.name}</h2>
        <img src="https://openweathermap.org/img/w/${iconCode}.png" alt="Значок погоди" class="mb-3">
        <p class="mb-1"><strong>Температура:</strong> ${temp}°C</p>
        <p class="mb-1"><strong>Тиск:</strong> ${pressure} hPa</p>
        <p class="mb-1"><strong>Опис:</strong> ${description}</p>
        <p class="mb-1"><strong>Вологість :</strong> ${humidity}%</p>
        <p class="mb-1"><strong>Швидкість вітру:</strong> ${windSpeed} м/с</p>
        <p class="mb-1"><strong>Напрям вітру:</strong> ${windDeg}°</p>
    `;
};

const displayError = (message) => {
  const weatherContainer = document.getElementById('weather');
  weatherContainer.innerHTML = `
        <div class="alert alert-danger" role="alert">
            Помилка: ${message}
        </div>
    `;
};

document.getElementById('weatherForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const city = document.getElementById('cityInput').value;
  getWeather(city);
});
