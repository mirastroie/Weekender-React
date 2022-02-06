/* eslint-disable max-len */
import React from 'react';
import {connect} from 'react-redux';
import {loadUser} from '../../actions/user';
import {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {readEventsByUser} from '../../actions/events';
import EventItem from '../../components/EventItem';
import BackCover from '../../components/BackCover';
import {BREAKPOINTS} from '../../utils/constants/general';
import {Box} from '@mui/material';

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
          src="https://images.unsplash.com/photo-1609800029525-b91fdea39774?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
          title={`Hello, ${profileUser.username}`}
          subtitle="Your Profile"
        >
        </BackCover>
        <Box sx={{ml: BREAKPOINTS.INNER_CONTAINER.LEFT, mt: BREAKPOINTS.INNER_CONTAINER.TOP}}>
          <h3>Your next events</h3>
          {params.uid && events[params.uid] && events[params.uid].map((event:any, index:number) => (
            <EventItem key={index} event={event}></EventItem>
          ))}
        </Box>

      </div>
      }
    </>
  );
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
