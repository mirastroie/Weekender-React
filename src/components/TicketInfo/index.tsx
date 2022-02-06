import React from 'react';
import {PaperStyle} from '../../utils/constants/general';
import {Paper, Box, Button} from '@mui/material';

interface TicketItemProps{
  ticket: any;
  removeItem: Function;
}
const TicketInfo = (props:TicketItemProps) => {
  const ticket = props.ticket;
  const removeItem = props.removeItem;
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
          onClick={() => removeItem(ticket.ticketId)}
          disableElevation>
          <Box sx={{fontWeight: 500}}> Remove </Box>
        </Button>
      </Paper>
    </>
  );
};

export default TicketInfo;
