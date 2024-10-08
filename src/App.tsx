import { FC } from 'react';
import { ThemeProvider } from 'styled-components';
import { Reset } from 'styled-reset';

import GlobalStyles from '@style/theme/global.styled';

import '@style/scss/styles.scss';
import theme from '@style/theme/theme';
import Layout from '@layout/index';

const App: FC = () => {
    return (
        <ThemeProvider theme={theme}>
            <Reset />
            <GlobalStyles />

            <Layout />
        </ThemeProvider>
    );
};

export default App;
