import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getWeatherInfo } from "../api/api";

export type WeatherState = {
  entities: WeatherInfo[];
  isLoading: boolean;
  error: string;
};

const initialState: WeatherState = {
  entities: [],
  isLoading: false,
  error: "",
};

export const getWeather = createAsyncThunk(
  "weather/getWeather",
  async (cityName: string) => {
    try {
      const weatherData = await getWeatherInfo(cityName);

      return weatherData;
    } catch {
      throw new Error("Check the city name is correct");
    }
  }
);

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getWeather.fulfilled, (state, action) => {
      state.isLoading = false;
      state.entities = action.payload;
      state.error = "";
    });
    builder.addCase(getWeather.pending, (state) => {
      state.error = "";
      state.isLoading = true;
    });
    builder.addCase(getWeather.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message || "";
    });
  },
});

export const weatherReducer = weatherSlice.reducer;
