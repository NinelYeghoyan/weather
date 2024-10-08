import { FC } from 'react';
import StyledCard from '@features/weather/components/Card/styled';

type CardProps = {
    date: string;
    temp: number;
    icon: string;
};

const Card: FC<CardProps> = ({ date, temp, icon }) => {
    return (
        <StyledCard className="WT-card flex-center flex-column cursor-pointer">
            <h3 className="WT-card__date">{date}</h3>

            <div className="flex align-center">
                <p className="WT-card__temp">{temp}°C</p>
                <img
                    src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
                    alt="Weather Icon"
                    className="WT-card__icon"
                />
            </div>
        </StyledCard>
    );
};

export default Card;
