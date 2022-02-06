import React from 'react';
import {PaperStyle} from '../../utils/constants/general';
import {Paper, Box, Button} from '@mui/material';

interface TicketItemProps{
  ticket: any;
  event: any;
  removeItem: Function;
}
const TicketInfo = (props:TicketItemProps) => {
  const ticket = props.ticket;
  const removeItem = props.removeItem;
  const event = props.event;
  return (
    <>
      <Paper
        sx={PaperStyle as React.CSSProperties}
        style={{width: '360px'}}>
        <div style={{display: 'inline', flexGrow: 1}}>
          <div style={{width: '200px'}}>
            <Box>
              {event.name}
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
        <div>
          <Box sx={{textAlign: 'end', pr: 2, pb: 2}}>{ticket.price}$ </Box>
          <Button
            size="medium"
            variant="contained"
            onClick={() => removeItem(ticket.ticketId)}
            disableElevation>
            <Box sx={{fontWeight: 500}}> Remove </Box>
          </Button>
        </div>
      </Paper>
    </>
  );
};

export default TicketInfo;
