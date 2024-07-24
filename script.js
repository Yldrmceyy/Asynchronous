'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
/*  ////AJAX Call: XMLHttpRequest 
const getCountryData = function (country) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();
  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    const language = data.languages ? Object.values(data.languages)[0] : 'No data';
    const currency = data.currencies ? Object.values(data.currencies)[0].name : 'No data';

    const HTML = `<article class="country">
          <img class="country__img" src="${data.flags.png}" />
          <div class="country__data">
            <h3 class="country__name">${data.name.common}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              +data.population / 1000000
            ).toFixed(1)}</p>
            <p class="country__row"><span>🗣️</span>${language}</p>
            <p class="country__row"><span>💰</span>${
              currency
            }</p>
          </div>
        </article> `;
    countriesContainer.insertAdjacentHTML('beforeend', HTML);
    countriesContainer.style.opacity = 1;
  });
};

getCountryData('portugal');
getCountryData('usa');
getCountryData('germany');
*/

//Welcome to Callback Hell
const renderCountry = function (data, className = '') {
  const language = data.languages
    ? Object.values(data.languages)[0]
    : 'No data';
  const currency = data.currencies
    ? Object.values(data.currencies)[0].name
    : 'No data';
  const HTML = `<article class="country ${className}">
  <img class="country__img" src="${data.flags.png}" />
  <div class="country__data">
    <h3 class="country__name">${data.name.common}</h3>
    <h4 class="country__region">${data.region}</h4>
    <p class="country__row"><span>👫</span>${(
      +data.population / 1000000
    ).toFixed(1)}</p>
    <p class="country__row"><span>🗣️</span>${language}</p>
    <p class="country__row"><span>💰</span>${currency}</p>
  </div>
</article> `;
  countriesContainer.insertAdjacentHTML('beforeend', HTML);
  countriesContainer.style.opacity = 1;
};

//Consuming Promise with FETCH API
const getCountryData = function (country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(response => response.json())
    .then(data => renderCountry(data[0]));
};
getCountryData('portugal');
