import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {readEvent} from '../../actions/events';
import {connect} from 'react-redux';
import TicketList from '../../components/TicketList';
import Cart from '../../components/Cart';
import {Box} from '@mui/material';
import BackCover from '../../components/BackCover';
import {formatDate} from '../../utils/functions/general';
import {BREAKPOINTS} from '../../utils/constants/general';

const Event = ({event, readEvent, isLoading}: {event:any, readEvent:Function, isLoading: Boolean}) => {
  const params = useParams();
  const onUnload = (e:any) => {
    e.preventDefault();
    console.log('Leaving!');
    // e.returnValue = true;
  };
  useEffect(() => {
    readEvent(params.uid);
    window.addEventListener('beforeunload', onUnload);
  }, []);
  return (
    <>
      {!isLoading && event &&
      <Box>
        <BackCover
          src={event.cover}
          title={event.name}
          subtitle={<Subtitle event={event}></Subtitle>}
        ></BackCover>
        {/* <EventInfo event={event}></EventInfo> */}
        <Box sx={{ml: BREAKPOINTS.INNER_CONTAINER.LEFT,
          mt: BREAKPOINTS.INNER_CONTAINER.TOP,
          pb: 15}}>
          <Box sx={{display: 'flex'}}>
            <Box sx={{
              flexGrow: 1,
              width: '100%'}}>
              <TicketList eventId={event.eventId}></TicketList>
            </Box>
            <Box sx={{
              width: '600px',
              marginTop: '-100px',
              marginRight: '15px',
            }}>
              <Cart/>
            </Box>
          </Box>
        </Box>
      </Box>}
    </>
  );
};

const Subtitle = (props:any) => {
  const event = props.event;
  const {long}:{long:any} = formatDate(event.date);
  return (
    <>
      {long} • {event.venue}
    </>
  );
};

function mapStateToProps(state:any) {
  return {
    event: state.eventReducer.event,
    isLoading: state.eventReducer.isLoading,
  };
}

const mapDispatchToProps = (dispatch:any) => {
  return {
    dispatch,
    readEvent: (eventId:string) => dispatch(readEvent(eventId)),
  };
};
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Event);

