import React, { createContext } from 'react';
import { Router } from 'react-router-dom';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import GlobalStyle from './styles/global';
import Routes from './routes';
import history from './services/history';
import light from './styles/themes/light';
import dark from './styles/themes/dark';
import usePersistedState from './utils/hooks/usePersistedState';

interface AppContextInterface {
  toggleTheme: () => void;
}

const AppContext = createContext<AppContextInterface | null>(null);

const {
  Provider: AppContextProvider,
} = AppContext;

const App: React.FC = () => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  return (
    <Router history={history}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <AppContextProvider value={{
          toggleTheme,
        }}
        >
          <Routes />
        </AppContextProvider>
      </ThemeProvider>
    </Router>
  );
};

export { App, AppContext };
