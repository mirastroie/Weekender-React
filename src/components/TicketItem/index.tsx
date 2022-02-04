import React from 'react';

interface TicketItemProps{
  ticket: any;
}

const TicketItem = ({ticket}:TicketItemProps) => {
  return (
    <>
      <div>
        {ticket.section}
      </div>
      <p>{ticket.row}</p>
      <p>{ticket.price}</p>
    </>
  );
};

export default TicketItem;
