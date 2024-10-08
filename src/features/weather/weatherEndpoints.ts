export const getWeatherURL = ({ city, key }: { city: string; key: number }) => {
    return `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&units=metric`;
};
