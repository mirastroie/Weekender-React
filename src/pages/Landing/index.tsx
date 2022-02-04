import React from 'react';
import {connect} from 'react-redux';
import {signOut} from '../../actions/auth';
import {loadUsers} from '../../actions/user';
import {useEffect} from 'react';
import * as ROUTES from '../../utils/constants/routes';
import {Link} from 'react-router-dom';

const Landing = ({userId, auth, signOut, users, loadUsers} : {userId:string, auth: any, signOut:any, users:any, loadUsers: any}) => {
  useEffect(() => {
    loadUsers();
  }, []);
  return (
    <div>
      <h1>Landing</h1>
      {console.log(auth)}
      { userId &&
      <Link to={`${ROUTES.PROFILE}/${userId}`}>Profile</Link>
      }
      <button onClick={() => signOut()}></button>
      <div>
        {users.map((user:any, index:number) => (
          <p key={index}>{user.email}</p>
        ))}</div>
    </div>
  );
};

function mapStateToProps(state:any) {
  return {
    userId: state.authReducer.userId,
    auth: state.firebaseReducer.auth,
    users: state.userReducer.users,
  };
}

const mapDispatchToProps = (dispatch:any) => {
  return {
    dispatch,
    signOut: (callback:any) => dispatch(signOut(callback)),
    loadUsers: () => dispatch(loadUsers()),
  };
};
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Landing);
