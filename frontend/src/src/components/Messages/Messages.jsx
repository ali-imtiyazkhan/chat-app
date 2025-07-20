import React from 'react';
import Message from './Message';

const Messages = () => {
  return (
    <div className="flex-1 overflow-y-auto px-4 py-2 space-y-4 custom-scrollbar">
      {[...Array(10)].map((_, i) => (
        <Message key={i} />
      ))}
    </div>
  );
};

export default Messages;
