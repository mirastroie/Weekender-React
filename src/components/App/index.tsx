import React from 'react';
import {
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
import {connect} from 'react-redux';
import PrivateRoute from '../PrivateRoute';
import Event from '../../pages/Event';

function App({authenticated}: {authenticated:boolean}) {
  return (
    <>
      {authenticated && <Navigation/>}
      <Routes>
        <Route path={ROUTES.LANDING} element={<LandingPage/>}/>
        <Route path={ROUTES.SIGN_IN} element={<SignInPage/>}/>
        <Route path={ROUTES.SIGN_UP} element={<SignUpPage/>}/>
        <Route path={ROUTES.HOME} element={<PrivateRoute><HomePage/></PrivateRoute>}/>
        <Route path={ROUTES.ACCOUNT} element = {<PrivateRoute><AccountPage/></PrivateRoute>}/>
        <Route path={ROUTES.PASSWORD_FORGET} element = {<PasswordForgetPage/>}/>
        <Route path={`${ROUTES.PROFILE}/:uid`} element={<PrivateRoute><Profile/></PrivateRoute>} />
        <Route path={`${ROUTES.EVENT}/:uid`} element={<PrivateRoute><Event/></PrivateRoute>}/>
      </Routes>
    </>
  );
};

function mapStateToProps(state:any) {
  return {
    authenticated: state.authReducer.authenticated,
  };
}

export default connect(mapStateToProps)(App);
