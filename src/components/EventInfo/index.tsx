import React from 'react';
import {connect} from 'react-redux';
import {useEffect} from 'react';
import {readLineup} from '../../actions/events';


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
    <div>
      <p>{event.name}</p>
    </div>
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
