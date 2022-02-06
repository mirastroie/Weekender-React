/* eslint-disable max-len */
import React from 'react';
import EventList from '../../components/EventList';
import BackCover from '../../components/BackCover';
const Home = () => (
  <div>
    <BackCover
      src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
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
