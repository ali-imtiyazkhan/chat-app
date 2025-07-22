import React from 'react';
import Sidebar from '../../components/sidebar/sidebar';
import MessageContainer from '../../components/Messages/MessageContainer';

const Home = () => {
  return (
    <div className="h-screen w-screen flex text-white">
      <Sidebar />
      <div className="flex-1 p-6 -mt-7">
        <MessageContainer />
      </div>
    </div>
  );
};

export default Home;
