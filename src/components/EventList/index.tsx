import React from 'react';
import {connect} from 'react-redux';
import {useEffect} from 'react';
import {bulkReadEvents} from '../../actions/events';
import EventItem from '../EventItem';
import {Box} from '@mui/material';
import {BREAKPOINTS} from '../../utils/constants/general';

const EventList = ({events, bulkReadEvents} : {events:Array<Object>, bulkReadEvents: Function}) => {
  useEffect(() => {
    bulkReadEvents();
  }, []);
  return (
    <>
      <Box sx={{ml: BREAKPOINTS.INNER_CONTAINER.LEFT, mt: BREAKPOINTS.INNER_CONTAINER.TOP}}>
        <Box sx={{fontSize: 'body.fontSize'}}>{events.length} available concerts</Box>
        <Box sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          mt: 12,
        }}>
          <div>
            {events !== [] && <div>
              {events.map((event:any, index:number) => (
                <EventItem key={index} event={event}></EventItem>
              ))}</div>
            }
          </div>
        </Box>
      </Box>
    </>
  );
};

function mapStateToProps(state:any) {
  return {
    events: state.eventReducer.events,
  };
}

const mapDispatchToProps = (dispatch:any) => {
  return {
    dispatch,
    bulkReadEvents: () => dispatch(bulkReadEvents()),
  };
};
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(EventList);
