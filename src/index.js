import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import { persistor, store } from "./store/store";
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const renderApp = () => {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App/>
        </PersistGate>
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

renderApp();
