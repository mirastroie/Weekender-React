import React from 'react';
import {connect} from 'react-redux';
import {useEffect} from 'react';
import {bulkReadEvents} from '../../actions/events';
import EventItem from '../EventItem';

const EventList = ({events, bulkReadEvents} : {events:Array<Object>, bulkReadEvents: Function}) => {
  useEffect(() => {
    bulkReadEvents();
  }, []);
  return (
    <div>
      <h1>Events</h1>
      {events !== [] && <div>
        {events.map((event:any, index:number) => (
          <EventItem key={index} event={event}></EventItem>
        ))}</div>
      }
    </div>
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
