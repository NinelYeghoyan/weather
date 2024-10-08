import { FC } from 'react';
import { useGetDataQuery } from '@features/weather/weatherAPI';
import StyledWeather from '@features/weather/components/Weather/styled';
import Card from '@features/weather/components/Card';
import { API_KEY } from '@config/index';
import Loader from '@components/Loader';
import List from '@features/weather/components/List';
import Today from '@features/weather/components/Today';

const Weather: FC = () => {
    const { data, isLoading, error } = useGetDataQuery({ city: 'Yerevan', key: API_KEY });

    if (isLoading) return <Loader />;
    if (error) return <div>Error fetching weather data</div>;

    const dailyForecasts: { [key: string]: any } = {};
    const today = new Date().toISOString().split('T')[0];
    let todayTemp: number | null = null;
    let todayIcon: string | null = null;
    let todayDescription: string | null = null;

    data?.list.forEach((forecast) => {
        const date = forecast.dt_txt.split(' ')[0];
        if (date === today) {
            todayTemp = Math.round(forecast.main.temp);
            todayIcon = forecast.weather[0].icon;
            todayDescription = forecast.weather[0].main;
        }
        if (!dailyForecasts[date]) {
            dailyForecasts[date] = forecast;
        }
    });

    const uniqueDays = Object.values(dailyForecasts).slice(0, 5);

    return (
        <StyledWeather className="WT-weather">
            <div className="WT-weather__container">
                <div className="flex-center pt-30 pb-50">
                    <Today name={data?.city.name} temp={todayTemp} icon={todayIcon} description={todayDescription} />

                    <List className="ml-50" data={data?.list} />
                </div>

                <div className="flex align-center gap-10">
                    {uniqueDays.map((forecast, index) => {
                        const date = new Date(forecast.dt_txt);
                        const formattedDate = `${String(date.getDate()).padStart(2, '0')}-${String(date.getMonth() + 1).padStart(2, '0')}`;

                        return (
                            <Card
                                key={index}
                                date={formattedDate}
                                temp={Math.round(forecast.main.temp)}
                                icon={forecast.weather[0].icon}
                            />
                        );
                    })}
                </div>
            </div>
        </StyledWeather>
    );
};

export default Weather;
