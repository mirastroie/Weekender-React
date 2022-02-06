/* eslint-disable max-len */
import React from 'react';
import {connect} from 'react-redux';
import {loadUser} from '../../actions/user';
import {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {readEventsByUser} from '../../actions/events';
import EventItem from '../../components/EventItem';
import BackCover from '../../components/BackCover';
import {BREAKPOINTS, PROFILE_IMAGE_SRC} from '../../utils/constants/general';
import {Box, Avatar} from '@mui/material';

const Profile = ({loadUser, profileUser, readEventsByUser, events} : {loadUser: any, profileUser: any, readEventsByUser: Function, events: any}) => {
  const params = useParams();
  useEffect(() => {
    loadUser(params.uid);
    readEventsByUser(params.uid);
  }, []);
  return (
    <>
      {profileUser &&
      <div>
        <BackCover
          src={PROFILE_IMAGE_SRC}
          title={`Hello, ${profileUser.username}`}
          subtitle="Your Profile"
        >
        </BackCover>
        <Box
          sx={{
            ml: BREAKPOINTS.INNER_CONTAINER.LEFT,
            mt: BREAKPOINTS.INNER_CONTAINER.TOP,
          }}>
          <Box
            sx={{
              display: 'flex',
            }}>
            <Box sx={{flexGrow: 2}}>
              <h3>Your next events</h3>
              {params.uid && events[params.uid] && events[params.uid].map((event:any, index:number) => (
                <EventItem key={index} event={event}></EventItem>
              ))}
            </Box>
            <Box sx={{flexGrow: 1}}>
              {profileUser.profilePhoto &&
              <Avatar
                alt={profileUser.username}
                src={profileUser.profilePhoto}
                sx={avatarStyle}
              ></Avatar>
              }
              {!profileUser.profilePhoto &&
             <Avatar
               sx={avatarStyle}>
               {profileUser.username.charAt(0).toLocaleUpperCase()}
             </Avatar>
              }
            </Box>
          </Box>
        </Box>
      </div>
      }
    </>
  );
};

const avatarStyle = {
  width: '200px',
  height: '200px',
  position: 'absolute',
  right: '30px',
  top: '260px',
};

function mapStateToProps(state:any) {
  return {
    userId: state.authReducer.userId,
    profileUser: state.userReducer.profileUser,
    events: state.eventReducer.eventsByUser,
  };
}

const mapDispatchToProps = (dispatch:any) => {
  return {
    dispatch,
    loadUser: (userId:string) => dispatch(loadUser(userId)),
    readEventsByUser: (userId:string) => dispatch(readEventsByUser(userId)),
  };
};
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Profile);
