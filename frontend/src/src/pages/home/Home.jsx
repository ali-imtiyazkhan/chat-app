import React from 'react';
import Sidebar from '../../components/sidebar/sidebar';
import Conversations from '../../components/sidebar/Conversations';
import MessageContainer from '../../components/Messages/MessageContainer';

const Home = () => {
  return (
    <div className="h-screen w-screen flex text-white">
      {/* Sidebar on the left */}
      <Sidebar />

      {/* Chat content placeholder */}
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-bold">Select a conversation</h1>
        {/* Later you can render <ChatBox /> here */}
        <MessageContainer/>
      </div>
    </div>
  );
};

export default Home;
