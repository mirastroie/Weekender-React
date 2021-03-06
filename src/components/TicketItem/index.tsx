import React from 'react';
import {PaperStyle} from '../../utils/constants/general';
import {Paper, Box, Button} from '@mui/material';

interface TicketItemProps{
  ticket: any;
  addToCart: Function;
}
const TicketItem = ({ticket, addToCart}:TicketItemProps) => {
  return (
    <>
      <Paper sx={PaperStyle as React.CSSProperties} style={{width: '400px'}}>
        <div style={{display: 'inline', flexGrow: 1}}>
          <div style={{width: '200px'}}>
            <Box>
              {ticket.price} dollars
            </Box>
            <Box sx={{
              typography: 'subtitle2',
              fontWeight: 'light',
              color: 'text.secondary',
            }}>
              Section {ticket.section}, Row {ticket.row}
            </Box>
          </div>
        </div>
        <Button
          size="medium"
          variant="contained"
          onClick={() => addToCart(ticket)}
          disableElevation>
          <Box sx={{fontWeight: 500}}>Add to cart</Box>
        </Button>
      </Paper>
    </>
  );
};

export default TicketItem;
