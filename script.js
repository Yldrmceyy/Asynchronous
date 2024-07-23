'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
const request = new XMLHttpRequest();
request.open('GET', 'https://restcountries.com/v3.1/name/portugal');
request.send();
request.addEventListener('load', function () {
  const [data] = JSON.parse(this.responseText);
  console.log(data);

  const HTML = `<article class="country">
          <img class="country__img" src="${data.flags.png}" />
          <div class="country__data">
            <h3 class="country__name">${data.name.common}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(+data.population/1000000).toFixed(1)}</p>
            <p class="country__row"><span>🗣️</span>${data.languages.por}</p>
            <p class="country__row"><span>💰</span>${data.currencies.EUR.name}</p>
          </div>
        </article> `;
        countriesContainer.insertAdjacentHTML("beforebegin", HTML);
        countriesContainer.style.opacity=1;
});
