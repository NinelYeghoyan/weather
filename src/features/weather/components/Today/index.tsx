import { FC } from 'react';
import StyledToday from '@features/weather/components/Today/styled';

type TodayProps = {
    name: string | undefined;
    temp: number | null;
    icon: string | null;
    description: string | null;
};

const Today: FC<TodayProps> = ({ name, temp, icon, description }) => {
    return (
        <StyledToday className="WT-today flex align-center flex-column">
            <h2 className="WT-today__name mb-12">{name}</h2>

            <h3 className="WT-today__temp">{temp}°C</h3>
            <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="icon" className="WT-today__icon mv-16" />
            <p className="WT-today__description">{description}</p>
        </StyledToday>
    );
};

export default Today;
