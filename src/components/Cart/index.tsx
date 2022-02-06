import React from 'react';
import {Button, Paper} from '@mui/material';
import {connect} from 'react-redux';
import {addOrder, removeFromBasket} from '../../actions/order';
import TicketInfo from '../../components/TicketInfo';
import {Box} from '@mui/material';

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
        <Box sx={{fontSize: 'h5.fontSize', mb: 10}}>Cart</Box>
        <Box sx={{flexGrow: 1}}>
          {cartItems.length === 0 &&
            <Box sx={{
              display: 'flex',
              flexDirection: 'column',
              textAlign: 'center',
            }}>
              <h4 style={{marginBottom: '5px'}}>Nothing here yet!
              </h4>
              <Box sx={{typography: 'subtitle2'}}>Start adding items to your cart</Box>
            </Box>
          }
          { cartItems.map((item:any, index:number) => (
            <TicketInfo key={index} ticket={item} removeItem={removeItem}/>
          ))
          }
        </Box>
        <Button
          size="medium"
          variant="contained"
          onClick={() => addOrder(cartItems, event, userId)}
          sx={{width: '100px', alignSelf: 'flex-end', ml: 'auto', mr: 'auto'}}
          disableElevation>
          <Box sx={{fontWeight: 500}}>Checkout</Box>
        </Button>
      </Paper>
    </>
  );
};


const CartStyle = {
  width: '400px',
  height: '400px',
  padding: '20px',
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  borderRadius: '16px',
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

