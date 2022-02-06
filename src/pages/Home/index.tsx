import React from 'react';
import EventList from '../../components/EventList';
import BackCover from '../../components/BackCover';
import {EVENTS_IMAGE_SRC} from '../../utils/constants/general';

const Home = () => (
  <div>
    <BackCover
      src={EVENTS_IMAGE_SRC}
      title="Discover events"
      subtitle="Shop millions of live events and discover cant-miss concerts."
    >
      <div>
      </div>
    </BackCover>
    <EventList></EventList>
  </div>
);

export default Home;
