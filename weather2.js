//intializing varible
const Submit = document.getElementById("submit");

//API number 1 (for geting weather of city)
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "e518a8bd6cmshfbac24178d7f6fap135ccfjsn744be75bb3e2",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};
//API number 2 (for geeting AQI)
const options2 = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "e518a8bd6cmshfbac24178d7f6fap135ccfjsn744be75bb3e2",
    "X-RapidAPI-Host": "air-quality-by-api-ninjas.p.rapidapi.com",
  },
};
//API number 3 (to get location and weakly forcast)
const options3 = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "e518a8bd6cmshfbac24178d7f6fap135ccfjsn744be75bb3e2",
    "X-RapidAPI-Host": "foreca-weather.p.rapidapi.com",
  },
};

//feanching the city  to get weather location (API1)
const getWeather = (city) => {
  cityName.innerHTML = city;
  fetch(
    `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      temp.innerHTML = `${response.temp}°C`;
      const cloudpct = response.cloud_pct;
      if (cloudpct > 10) {
        type.innerHTML = "Cloudy";
      } else {
        type.innerHTML = "Clear";
      }
      //section 3 of weather application
      const sunrisetrim = response.sunrise;
      const sunsettrim = response.sunset;
      rain1.innerHTML = `${response.cloud_pct}％`;
      sunrise.innerHTML = `${sunrisetrim}`;
      sunset.innerHTML = `${sunsettrim}`;
      feals_like.innerHTML = `${response.feels_like}°C`;
      rain.innerHTML = `${response.cloud_pct}％`;
      windspeed.innerHTML = `${response.wind_speed}kmph`;
      humidity.innerHTML = `${response.humidity}g.㎥`;

      console.log(response);
    })
    .catch((err) => console.error(err));
  //feanching the AQI (API2)
  fetch(
    `https://air-quality-by-api-ninjas.p.rapidapi.com/v1/airquality?city=${city}`,
    options2
  )
    .then((response) => response.json())
    .then((response) => {
      const AQI2 = response.overall_aqi;
      AQI.innerHTML = `😷AQI ${AQI2}`;
      if (AQI2 > 100) {
        console.log(`hardizious`);
      } else {
        console.log(`not hardizious`);
      }
      aqi.innerHTML = `${AQI2}ppm`;
      console.log(response);
    })
    .catch((err) => console.error(err));
  //feanching the weakliy forcast and location id
  fetch(
    `https://foreca-weather.p.rapidapi.com/location/search/${city}?lang=en&country=in`,
    options3
  )
    .then((response) => response.json())
    .then((response) => {
      const id = response.locations[0].id;
      //fentching day

      //feanching weakly forcast
      fetch(
        `https://foreca-weather.p.rapidapi.com/forecast/daily/${id}`,
        options3
      )
        .then((response) => response.json())
        //geting max temp
        .then((response) => {
          const arr = [maxtemp1, maxtemp2, maxtemp3];
          arr.forEach((element, i) => {
            element.innerHTML = `${response.forecast[i].maxTemp}°C`;
          });
          //geting min temp
          const arr2 = [mintemp1, mintemp2, mintemp3];
          arr2.forEach((element, i) => {
            element.innerHTML = `${response.forecast[i].minTemp}°C`;
          });

          console.log(response);
        })
        .catch((err) => console.error(err));

      console.log(id);
      console.log(response);
    })
    .catch((err) => console.error(err));
};
Submit.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather(city.value);
});
getWeather("Delhi");
// const options4 = {
//   method: "GET",
//   headers: {
//     "X-RapidAPI-Key": "e518a8bd6cmshfbac24178d7f6fap135ccfjsn744be75bb3e2",
//     "X-RapidAPI-Host": "foreca-weather.p.rapidapi.com",
//   },
// };
const options4 = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "e518a8bd6cmshfbac24178d7f6fap135ccfjsn744be75bb3e2",
    "X-RapidAPI-Host": "rainiest-city-rank.p.rapidapi.com",
  },
};

//extra code snippeds
/* const options4 = {
  method: "GET",
  headers: {
     "X-RapidAPI-Key": "e518a8bd6cmshfbac24178d7f6fap135ccfjsn744be75bb3e2",
    "X-RapidAPI-Host": "foreca-weather.p.rapidapi.com",
  },
 };
 */

//DAY = 2022-12-17
/*
const d = new Date("July 21, 1983 01:15:00");
let day = d.getDay();
console.log(day);
// const arr =[January,February,March,April,May,June,July,August,September,October,November,December];
//  [1 ,2,3,4,5,6,7,8,9,10,11,12] = arr ;
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const [
  January,
  February,
  March,
  April,
  May,
  June,
  July,
  August,
  September,
  October,
  November,
  December,
] = arr;
console.log(1);
const date = response.forecast[0].date;
const date2 = date.split("-");
const [year, month2, day2] = date2;
const d2 = new Date(month, day, year);
const time = gettIME;
let day3 = d.getDate();
console.log(day3);
*/
