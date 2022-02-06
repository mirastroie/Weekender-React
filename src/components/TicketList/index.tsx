import React from 'react';
import {connect} from 'react-redux';
import {useEffect} from 'react';
import TicketItem from '../TicketItem';
import {readTicketsByEvent} from '../../actions/ticket';
import {addToBasket} from '../../actions/order';


interface TicketListProps{
  eventId: string;
  tickets: Array<Object>;
  readTicketsByEvent: Function;
  addToCart: Function;
  cartItems: Array<Object>
};

const TicketList = ({eventId, tickets, readTicketsByEvent, addToCart, cartItems}: TicketListProps) => {
  useEffect(() => {
    readTicketsByEvent(eventId);
  }, []);
  const checkCart = (id:string) => {
    return cartItems.filter((item:any) => item.ticketId == id).length == 0;
  };
  return (
    <div>
      <h2>Tickets</h2>
      {tickets && <div>
        {tickets.map((ticket:any, index:number) => (
          checkCart(ticket.ticketId) && <TicketItem key={index} ticket={ticket} addToCart={addToCart} ></TicketItem>
        ))}</div>
      }
    </div>
  );
};

function mapStateToProps(state:any) {
  return {
    tickets: state.ticketReducer.tickets,
    cartItems: state.orderReducer.basket,
  };
}

const mapDispatchToProps = (dispatch:any) => {
  return {
    dispatch,
    readTicketsByEvent: (eventId:string) => dispatch(readTicketsByEvent(eventId)),
    addToCart: (ticket:object) => dispatch(addToBasket(ticket)),
  };
};
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(TicketList);
