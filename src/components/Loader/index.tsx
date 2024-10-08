import { FC } from 'react';

import { StyledLoader } from '@components/Loader/styled';

const Loader: FC = () => (
    <StyledLoader className="WT-animation-load w100 h100 flex-center">
        <span className="WT-animation-load-button WT-animation-load-button-single" />
        <span className="WT-animation-load-button WT-animation-load-button-double" />
        <span className="WT-animation-load-button WT-animation-load-button-single" />
        <span className="WT-animation-load-button WT-animation-load-button-double" />
    </StyledLoader>
);

export default Loader;
