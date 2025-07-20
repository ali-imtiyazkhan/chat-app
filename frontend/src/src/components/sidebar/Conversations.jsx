 import React from 'react';
import Conversation from './Conversation';

const Conversations = () => {
  return (
    <div className="flex flex-col gap-2 pr-2">
      {[...Array(10)].map((_, i) => (
        <Conversation key={i} />
      ))}
    </div>
  );
};

export default Conversations;