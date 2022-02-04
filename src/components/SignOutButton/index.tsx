import React from 'react';
import {useNavigate} from 'react-router-dom';
import {signOut as signOutService} from '../../actions/auth';
import {connect} from 'react-redux';

const SignOutButton = ({signOut}: {signOut:any}) => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>SignOut</h1>
      <button onClick={() => signOut(() => navigate('/'))}>Sign Out</button>
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
    signOut: (callback:any) => dispatch(signOutService(callback)),
  };
};
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(SignOutButton);
