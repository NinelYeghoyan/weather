import { api } from '@app/api';
import { WeatherTypes } from '@features/weather/weatherTypes';
import { getWeatherURL } from '@features/weather/weatherEndpoints.ts';

export const weatherAPI = api.injectEndpoints({
    endpoints: (builder) => ({
        getData: builder.query<WeatherTypes, { city: string; key: number }>({
            query: ({ city, key }) => ({
                url: getWeatherURL({ city, key }),
                method: 'GET',
            }),
        }),
    }),
    overrideExisting: false,
});

export const { useGetDataQuery } = weatherAPI;
