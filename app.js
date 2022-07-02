const elBody = document.querySelector(".main-body");
const elInput = document.querySelector(".input-value");
const elFormValue = document.querySelector(".form");

const renderWeather = function (data) {
  const html = `
    <div class="main p-5 d-flex align-items-center justify-conten-around">
    <div>
      <form class="form">
        <input
          class="input-value border-0"
          type="text"
          id="input"
          placeholder="Search"
        />
        <i class="fas fa-search icon"></i>
      </form>
      <div class="text">
        <h2 class="title text-capitalize text-white">${data.name}</h2>
        <div class="d-flex align-items-center">
          <span class="fs-3 text-capitalize temp">🌡</span>
          <p class="fs-3 text-white">${data.main.temp} °C</p>
        </div>
        <h3 class="text-white">wind:${data.wind.speed}</h3>
      </div>
    </div>
    <img width="270px" class="img" src="./imgs/cloudy.svg" alt="" />
  </div> 
    `;
  // elBody.innerHTML = null;
  elBody.insertAdjacentHTML("beforeend", html);
};

const getCountryWeather = function (country) {
  const request = fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${country}&units=metric&appid=277e160f5af509c9f6e384d7cbe3501c`
  )
    .then((response) => response.json())
    .then((data) => renderWeather(data));
  return request;
};
getCountryWeather("uzbekistan");
// getCountryWeather("canada");

elFormValue.addEventListener(function (evt) {
  evt.preventDefault();
  const inputValue = elInput.value;
  getCountryWeather(inputValue);
});
