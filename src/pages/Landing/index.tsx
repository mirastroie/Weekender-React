import React from 'react';
import {connect} from 'react-redux';
import {signOut} from '../../actions/auth';
import * as ROUTES from '../../utils/constants/routes';
import {Link} from 'react-router-dom';

const Landing = ({userId, auth, signOut} : {userId:any, auth: any, signOut:any}) => {
  return (
    <div>
      <h1>Landing</h1>
      {console.log(auth)}
      { userId &&
      <Link to={`${ROUTES.PROFILE}/${userId}`}>Profile</Link>
      }
      <button onClick={() => signOut()}></button>
    </div>
  );
};

function mapStateToProps(state:any) {
  return {
    userId: state.authReducer.userId,
    auth: state.firebaseReducer.auth,
  };
}

const mapDispatchToProps = (dispatch:any) => {
  return {
    dispatch,
    signOut: (callback:any) => dispatch(signOut(callback)),
  };
};
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Landing);
