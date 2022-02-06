import React from 'react';
import * as ROUTES from '../../utils/constants/routes';
import {Link} from 'react-router-dom';
import {Button, Paper, Box} from '@mui/material';
import {formatDate} from '../../utils/functions/general';
import {PaperStyle} from '../../utils/constants/general';
import {EventType} from '../../utils/constants/types';
const EventItem = (props:any) => {
  const event:EventType = props.event;
  const {month, day, dayHour}:{month:any, day:any, dayHour:any} = formatDate(event.date.seconds);
  return (
    <>
      <Paper sx={PaperStyle as React.CSSProperties} style={{width: '1100px'}}>
        <div>
          <Box>{month} {day}</Box>
          <Box sx={{
            typography: 'subtitle2',
            fontWeight: 'light',
            color: 'text.secondary',
          }}>
            {dayHour}
          </Box>
        </div>
        <div style={{display: 'inline', flexGrow: 1}}>
          <div style={{width: '350px'}}>
            <Box>
              {event.name}
            </Box>
            <Box sx={{
              typography: 'subtitle2',
              fontWeight: 'light',
              color: 'text.secondary',
            }}>
              {event.venue}
            </Box>
          </div>
        </div>
        <Link to={`${ROUTES.EVENT}/${event.eventId}`} style={{textDecoration: 'none'}}>
          <Button
            size="medium"
            variant="contained"
            disableElevation>
            <Box sx={{fontWeight: 500}}>See event</Box>
          </Button>
        </Link>
      </Paper>
    </>
  );
};
export default EventItem;
