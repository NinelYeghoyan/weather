import { FC } from 'react';
import StyledList from '@features/weather/components/List/styled';
import { ListType } from '@features/weather/weatherTypes';

type ListProps = {
    data: ListType[] | undefined;
    className: string;
};

const List: FC<ListProps> = ({ data, className }) => {
    return (
        <StyledList className={`${className} WT-list`}>
            {data?.map((forecast, index) => (
                <li key={index} className="flex-center">
                    <div>
                        <span>
                            {new Date(forecast.dt_txt).toLocaleTimeString([], {
                                hour: '2-digit',
                                minute: '2-digit',
                                second: '2-digit',
                                hour12: false,
                            })}
                        </span>
                        {''} {Math.round(forecast.main.temp)}°C
                    </div>

                    <img
                        src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`}
                        alt={forecast.weather[0].description}
                        className="WT-list__icon"
                    />
                </li>
            ))}
        </StyledList>
    );
};

export default List;
