import { FC } from 'react';
import Weather from '@features/weather/components/Weather';
import StyledMain from '@layout/Main/styled.ts';

const Main: FC = () => {
    return (
        <StyledMain className="WT-main">
            <Weather />
        </StyledMain>
    );
};

export default Main;
