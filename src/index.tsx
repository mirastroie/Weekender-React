import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router,
} from 'react-router-dom';
// SETTING UP REDUX STORE
import {store, persistor} from './store/index';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {ThemeProvider} from '@mui/material/styles';
import theme from './style/theme';
import CssBaseline from '@mui/material/CssBaseline';


ReactDOM.render(
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <Provider store = {store}>
          <PersistGate loading={null} persistor={persistor}>
            <Router>
              <App/>
            </Router>
          </PersistGate>
        </Provider>
      </CssBaseline>
    </ThemeProvider>,
    document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
