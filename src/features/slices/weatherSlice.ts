import { createSlice } from "@reduxjs/toolkit";
import { WeatherInfo } from "../../utils/types";
import { api_key, base_url } from "../../utils/constant";
import { putMessege } from "./messageSlice";
import { AppDispatch } from "../../app/store";

const weatherSlice = createSlice({
    name: 'weather',
    initialState: {} as WeatherInfo,
    reducers: {
        putWeatherInfo: (_state, action) => action.payload
    },
});

export const { putWeatherInfo } = weatherSlice.actions;

export const fetchWeather = (city: string) => (dispatch: AppDispatch) => {
    fetch(`${base_url}?q=${city}&appid=${api_key}&units=metric`)
        .then(response => response.json())
        .then(data => {
            const info = {
                city: data.name,
                country: data.sys.country,
                temp: data.main.temp,
                pressure: data.main.pressure,
                sunset: data.sys.sunset,
            };
            dispatch(putWeatherInfo(info));
            dispatch(putMessege(''));
        })
        .catch(() => {
            dispatch(putMessege('Enter correct city name'));
        });
};

export default weatherSlice.reducer;