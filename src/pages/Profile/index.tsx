import React from 'react';
import {connect} from 'react-redux';
import {loadUser} from '../../actions/user';
import {useEffect} from 'react';
import {useParams} from 'react-router-dom';
const Profile = ({loadUser, profileUser} : {loadUser: any, profileUser: any}) => {
  const params = useParams();
  useEffect(() => {
    loadUser(params.uid);
  });
  return (
    <div>
      { profileUser && profileUser.email && <p>Hello! {profileUser.email}</p>
      }
    </div>
  );
};

function mapStateToProps(state:any) {
  return {
    userId: state.authReducer.userId,
    profileUser: state.userReducer.profileUser,
  };
}

const mapDispatchToProps = (dispatch:any) => {
  return {
    dispatch,
    loadUser: (userId:string) => dispatch(loadUser(userId)),
  };
};
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Profile);
