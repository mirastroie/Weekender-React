import React from 'react';
import {connect} from 'react-redux';
import {useEffect} from 'react';
import {readLineup} from '../../actions/events';
import BoxInfo from '../../components/BoxInfo';
import {Avatar, Box} from '@mui/material';

interface EventInfoProps{
  lineup: any;
  readLineup: any;
  event:any;
}

const EventInfo = ({lineup, readLineup, event}:EventInfoProps) => {
  useEffect(() => {
    const lineupIds = event.lineup.map((artist:any) => artist.artistId);
    readLineup(lineupIds);
  }, []);
  return (
    <>
      <BoxInfo
        title="Event Info"
        actionComponent={() => (<></>)}
      >
        <div style={{padding: '0 10px'}}>
          <Box sx={{typography: 'body1'}}>About</Box>
          <Box sx={{
            typography: 'subtitle2',
            fontWeight: 'light',
            color: 'text.secondary',
          }}>
            {event.description}
          </Box>
        </div>
        <div style={{padding: '0 10px'}}>
          <Box sx={{typography: 'body1'}}>Lineup</Box>
          <div style={{display: 'flex', gap: '10px', marginTop: '10px', flexWrap: 'wrap'}}>
            {
              lineup.map((artist:any, index:number) => (
                <Box
                  key={index}
                  sx={{
                    display: 'flex',
                    alignContent: 'center',
                    gap: 4,
                  }}
                >
                  <Avatar
                    alt={artist.name}
                    src={artist.profilePhoto}
                    sx={{
                      display: 'inline-flex',
                    }}
                  >
                  </Avatar>
                  <Box sx={{
                    typography: 'subtitle2',
                    fontWeight: 'light',
                    color: 'text.secondary',
                  }}>
                    {artist.name}
                  </Box>
                </Box>
              ))
            }
          </div>
        </div>
      </BoxInfo>
    </>
  );
};

function mapStateToProps(state:any) {
  return {
    lineup: state.eventReducer.lineup,
  };
}

const mapDispatchToProps = (dispatch:any) => {
  return {
    dispatch,
    readLineup: (lineupIds:any) => dispatch(readLineup(lineupIds)),
  };
};
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(EventInfo);
