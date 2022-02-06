import React, {useEffect} from 'react';
import {Button} from '@mui/material';
import {connect} from 'react-redux';
import {addOrder, emptyBasket, removeFromBasket} from '../../actions/order';
import TicketInfo from '../../components/TicketInfo';
import {Box} from '@mui/material';
import BoxInfo from '../../components/BoxInfo';
import {ORDER_STATUS} from '../../utils/constants/general';
import {EventType, TicketType} from '../../utils/constants/types';

interface CartProps{
    cartItems: Array<TicketType>;
    event: EventType;
    removeItem: Function;
    userId: string;
    addOrder: Function;
    status: any;
    emptyBasket: Function;
};
const Cart = ({cartItems, event, removeItem, userId, addOrder, status, emptyBasket} : CartProps) => {
  const success:boolean = status == ORDER_STATUS.SUCCESS;
  useEffect(() => {
    if (success) {
      setTimeout(() => emptyBasket(), 5000);
    };
  }, [success]);
  const checkoutButton = () => (
    <Button
      size="medium"
      variant="contained"
      onClick={() => addOrder(cartItems, event, userId)}
      sx={{width: '100px', alignSelf: 'flex-end', ml: 'auto', mr: 'auto'}}
      disabled = {cartItems.length == 0}
      disableElevation>
      <Box sx={{fontWeight: 500}}>Checkout</Box>
    </Button>
  );
  return (
    <>
      <BoxInfo
        title="Cart"
        actionComponent={checkoutButton}
      >
        {!success && cartItems.length === 0 &&
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
        {!success && cartItems.map((item:TicketType, index:number) => (
          <TicketInfo key={index} ticket={item} event ={event} removeItem={removeItem}/>
        ))
        }
        {
          success &&
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'center',
          }}>
            <h4 style={{marginBottom: '5px'}}>
              Your order was placed!
            </h4>
          </Box>
        }
      </BoxInfo>
    </>
  );
};

function mapStateToProps(state:any) {
  return {
    cartItems: state.orderReducer.basket,
    userId: state.authReducer.userId,
    event: state.eventReducer.event,
    status: state.orderReducer.status,
  };
}

const mapDispatchToProps = (dispatch:any) => {
  return {
    dispatch,
    removeItem: (ticketId:string) => dispatch(removeFromBasket(ticketId)),
    addOrder: (items:Array<TicketType>, event:EventType, userId:string) => dispatch(addOrder(items, event, userId)),
    emptyBasket: () => dispatch(emptyBasket()),
  };
};
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Cart);

