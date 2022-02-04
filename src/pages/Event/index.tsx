import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {readEvent} from '../../actions/events';
import EventInfo from '../../components/EventInfo';
import {connect} from 'react-redux';
import TicketList from '../../components/TicketList';

const Event = ({event, readEvent}: {event:any, readEvent:Function}) => {
  const params = useParams();
  useEffect(() => {
    readEvent(params.uid);
  }, []);
  return (
    <>
      {event && <EventInfo event={event}></EventInfo>}
      {event && <TicketList eventId={event.eventId}></TicketList>}
    </>
  );
};

function mapStateToProps(state:any) {
  return {
    event: state.eventReducer.event,
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

