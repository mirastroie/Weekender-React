import React from 'react';
import {Button, Paper} from '@mui/material';
import {connect} from 'react-redux';
import {addOrder, removeFromBasket} from '../../actions/order';
import TicketInfo from '../../components/TicketInfo';

interface CartProps{
    cartItems: Array<Object>;
    event: any;
    removeItem: Function;
    userId: string;
    addOrder: Function;
}
const Cart = ({cartItems, event, removeItem, userId, addOrder} : CartProps) => {
  return (
    <>
      <Paper sx={CartStyle}>
        <p>Cart</p>
        <div>
          { cartItems.map((item:any, index:number) => (
            <TicketInfo key={index} ticket={item} removeItem={removeItem}/>
          ))
          }
        </div>
        <Button onClick={() => addOrder(cartItems, event, userId)}>Checkout</Button>
      </Paper>
    </>
  );
};


const CartStyle = {
  width: '450px',
  display: 'flex',
  flexDirection: 'column',
  right: '20px',
  position: 'absolute',
  top: '370px',
};
function mapStateToProps(state:any) {
  return {
    cartItems: state.orderReducer.basket,
    userId: state.authReducer.userId,
    event: state.eventReducer.event,
  };
}

const mapDispatchToProps = (dispatch:any) => {
  return {
    dispatch,
    removeItem: (ticketId:string) => dispatch(removeFromBasket(ticketId)),
    addOrder: (items:any, event:any, userId:string) => dispatch(addOrder(items, event, userId)),
  };
};
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Cart);

