import React from 'react';
import {
  Route,
  Routes} from 'react-router-dom';
import Navigation from '../Navigation';
import * as ROUTES from '../../utils/constants/routes';
import SignUpPage from '../../pages/SignUp';
import SignInPage from '../../pages/SignIn';
import HomePage from '../../pages/Home';
import Profile from '../../pages/Profile';
import {connect} from 'react-redux';
import PrivateRoute from '../PrivateRoute';
import Event from '../../pages/Event';
import {BREAKPOINTS} from '../../utils/constants/general';

function App({authenticated, userId}: {authenticated:boolean, userId:string}) {
  return (
    <>
      {authenticated && <Navigation userId={userId}/>}
      <div style={ authenticated ? {marginLeft: `${BREAKPOINTS.B1}px`} : {}}>
        <Routes>
          <Route path={ROUTES.SIGN_IN} element={<SignInPage/>}/>
          <Route path={ROUTES.SIGN_UP} element={<SignUpPage/>}/>
          <Route path={ROUTES.HOME} element={<PrivateRoute><HomePage/></PrivateRoute>}/>
          <Route path={`${ROUTES.PROFILE}/:uid`} element={<PrivateRoute><Profile/></PrivateRoute>} />
          <Route path={`${ROUTES.EVENT}/:uid`} element={<PrivateRoute><Event/></PrivateRoute>}/>
        </Routes>
      </div>
    </>
  );
};

function mapStateToProps(state:any) {
  return {
    authenticated: state.authReducer.authenticated,
    userId: state.authReducer.userId,
  };
}

export default connect(mapStateToProps)(App);
