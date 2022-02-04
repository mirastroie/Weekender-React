import React from 'react';
import {connect} from 'react-redux';
import {useEffect} from 'react';
import TicketItem from '../TicketItem';
import {readTicketsByEvent} from '../../actions/ticket';


const TicketList = ({eventId, tickets, readTicketsByEvent} : {eventId:string, tickets:Array<Object>, readTicketsByEvent: Function}) => {
  useEffect(() => {
    readTicketsByEvent(eventId);
  }, []);
  return (
    <div>
      <h1>Tickets</h1>
      {tickets && <div>
        {tickets.map((ticket:any, index:number) => (
          <TicketItem key={index} ticket={ticket}></TicketItem>
        ))}</div>
      }
    </div>
  );
};

function mapStateToProps(state:any) {
  return {
    tickets: state.ticketReducer.tickets,
  };
}

const mapDispatchToProps = (dispatch:any) => {
  return {
    dispatch,
    readTicketsByEvent: (eventId:string) => dispatch(readTicketsByEvent(eventId)),
  };
};
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(TicketList);
