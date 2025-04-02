import axios from "axios";
import { FORECAST_HOURS, GEO_API, WEATHER_API } from "../utilitites/constants";
import { getWeatherIcon } from "../utilitites/helpers/getWeatherIcon";


// GEO API

const fetchCoordinates = async (cityName: string) => {
  const res = await axios.get(
    `${GEO_API}/v1/search?name=${cityName}&count=1&language=en&format=json`
  );
  return res.data.results[0];
};

// WEATHER API

const fetchWeatherHourly = async (latitude: number, longitude: number) => {
  const res = await axios.get(
    `${WEATHER_API}/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,rain,cloud_cover&timezone=auto&forecast_days=1`
  );
  return res.data.hourly;
};

export const getWeatherInfo = async (cityName: string) => {
  //getting coordinates by city
  const { latitude, longitude } = await fetchCoordinates(cityName);

  //getting weather data
  const { temperature_2m, rain, cloud_cover } = await fetchWeatherHourly(
    latitude,
    longitude
  );

  // creating weather data for selected city & hours
  const weatherData = FORECAST_HOURS.map((hour) => ({
    id: cityName + hour,
    time: `${hour}:00`,
    temp: temperature_2m[hour],
    iconType: getWeatherIcon(cloud_cover[hour], rain[hour]),
  }));

  return weatherData;
};