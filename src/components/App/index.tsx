import React from 'react';
import {BrowserRouter as Router,
  Route,
  Routes} from 'react-router-dom';
import Navigation from '../Navigation';
import * as ROUTES from '../../utils/constants/routes';
import LandingPage from '../../pages/Landing';
import SignUpPage from '../../pages/SignUp';
import SignInPage from '../../pages/SignIn';
import HomePage from '../../pages/Home';
import AccountPage from '../../pages/Account';
import PasswordForgetPage from '../../pages/PasswordForget';
import Profile from '../../pages/Profile';
import {store, persistor} from '../../store/index';

// SETTING UP REDUX STORE
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {ThemeProvider} from '@mui/material/styles';
import theme from '../../style/theme';
import CssBaseline from '@mui/material/CssBaseline';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <Provider store = {store}>
          <PersistGate loading={null} persistor={persistor}>
            <Router>
              <Navigation/>
              <hr/>

              <Routes>
                <Route path={ROUTES.LANDING} element={<LandingPage/>}/>
                <Route path={ROUTES.SIGN_IN} element={<SignInPage/>}/>
                <Route path={ROUTES.SIGN_UP} element={<SignUpPage/>}/>
                <Route path={ROUTES.HOME} element={<HomePage/>}/>
                <Route path={ROUTES.ACCOUNT} element = {<AccountPage/>}/>
                <Route path={ROUTES.PASSWORD_FORGET} element = {<PasswordForgetPage/>}/>
                <Route path={`${ROUTES.PROFILE}/:uid`} element={<Profile/>} />
              </Routes>

            </Router>
          </PersistGate>
        </Provider>
      </CssBaseline>
    </ThemeProvider>
  );
};;

export default App;
