import React from 'react';
import * as ROUTES from '../../utils/constants/routes';
import {Navigate} from 'react-router-dom';
import {connect} from 'react-redux';

const PrivateRoute = ({children, authenticated}: {children: any, authenticated: Boolean}) => {
  return authenticated ? children : <Navigate to={ROUTES.SIGN_IN}/>;
};

const mapStateToProps = (state:any) => {
  return {
    authenticated: state.authReducer.authenticated,
  };
};

export default connect(mapStateToProps)(PrivateRoute);
