import React from 'react';
import {connect} from 'react-redux';
import {useEffect} from 'react';
import {bulkReadEvents} from '../../actions/events';
import EventItem from '../EventItem';
import {Box} from '@mui/material';
import {BREAKPOINTS} from '../../utils/constants/general';
import {EventType} from '../../utils/constants/types';

const EventList = ({
  events,
  bulkReadEvents,
}: {
  events: Array<EventType>;
  bulkReadEvents: Function;
}) => {
  useEffect(() => {
    bulkReadEvents();
  }, []);
  return (
    <>
      <Box
        sx={{
          ml: BREAKPOINTS.INNER_CONTAINER.LEFT,
          mt: BREAKPOINTS.INNER_CONTAINER.TOP,
        }}
      >
        <Box sx={{fontSize: 'body.fontSize'}}>
          {events.length} available concerts
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            mt: 12,
          }}
        >
          <div>
            {events.length > 0 && (
              <Box
                sx={{
                  display: 'flex',
                  gap: 3,
                  flexWrap: 'wrap',
                }}
              >
                {events.map((event: EventType, index: number) => (
                  <EventItem key={index} event={event}></EventItem>
                ))}
              </Box>
            )}
          </div>
        </Box>
      </Box>
    </>
  );
};

function mapStateToProps(state: any) {
  return {
    events: state.eventReducer.events,
  };
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    dispatch,
    bulkReadEvents: () => dispatch(bulkReadEvents()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(EventList);
