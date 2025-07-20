import React from 'react';
import Messages from './Messages';
import MessageInput from './MessageInput';


const MessageContainer = () => {
  const isNoChatSelected = false;

  if (isNoChatSelected) {
    return <NoChatSelected />;
  }

  return (
    <div className="md:min-w-[450px] flex flex-col h-screen ">
      {/* Header */}
      <div className="bg-slate-700 px-4 py-3 border-b border-gray-600">
        <span className="text-sm text-gray-400">To</span>{" "}
        <span className="text-white font-semibold">John Doe</span>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto">
        <Messages />
      </div>

      {/* Message Input */}
      <MessageInput />
    </div>
  );
};

export default MessageContainer;

// No chat selected fallback component
const NoChatSelected = () => {
  return (
    <div className="flex items-center justify-center w-full h-screen">
      <div className="px-6 py-8 text-center sm:text-lg md:text-xl text-gray-300 font-semibold flex flex-col items-center gap-4 border border-gray-600 rounded-2xl shadow-xl backdrop-blur-sm">
        <div className="text-5xl">💬</div>
        <p className="text-2xl sm:text-3xl font-bold">Welcome Carter John</p>
        <p className="text-sm sm:text-base text-gray-400">Select a conversation to start messaging</p>
      </div>
    </div>
  );
};

