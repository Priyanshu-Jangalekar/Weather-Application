const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "e518a8bd6cmshfbac24178d7f6fap135ccfjsn744be75bb3e2",
    "X-RapidAPI-Host": "sunrise-sunset-times.p.rapidapi.com",
  },
};

fetch(
  "https://sunrise-sunset-times.p.rapidapi.com/getSunriseAndSunset?date=2021-10-31&latitude=51.5072&longitude=-0.1276&timeZoneId=America%2FNew_York",
  options
)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));