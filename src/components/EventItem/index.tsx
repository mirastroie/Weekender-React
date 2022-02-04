import React from 'react';
import * as ROUTES from '../../utils/constants/routes';
import {Link} from 'react-router-dom';

const EventItem = (props:any) => {
  return (
    <>
      <div>
        {props.event.name}
      </div>
      <p>{props.event.venue}</p>
      <Link to={`${ROUTES.EVENT}/${props.event.eventId}`}>Go to event</Link>
    </>
  );
};

export default EventItem;
