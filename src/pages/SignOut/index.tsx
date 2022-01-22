import React from 'react';
import {useNavigate} from 'react-router-dom';
import {signOut} from '../../actions/auth';
import {connect} from 'react-redux';

const SignOut = ({SignOut}: {SignOut:any}) => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>SignOut</h1>
      <button onClick={() => navigate('/')}>Sign Out</button>
    </div>
  );
};

function mapStateToProps(state:any) {
  return {
    user: state.authReducer.user,
  };
}

const mapDispatchToProps = (dispatch:any) => {
  return {
    dispatch,
    signOut: (callback:any) => signOut(callback),
  };
};
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(SignOut);
