import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';

import { PersistGate } from 'redux-persist/integration/react';

import ThemeContextProvider from './components/MainLayout/ThemeToggler/ThemeContextProvider';

import { store, persistor } from './redux/store';
import './utils/internationalization/i18next';

import App from './App.jsx';
import './index.css';
//test
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter basename="/react_node_fs_68_WerewolfDevLearn/">
        <ThemeContextProvider>
          <App />
        </ThemeContextProvider>
      </BrowserRouter>
    </PersistGate>
  </Provider>
);
