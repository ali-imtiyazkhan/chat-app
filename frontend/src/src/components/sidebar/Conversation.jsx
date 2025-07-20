 import React from 'react';

const Conversation = () => {
  return (
    <div className="flex gap-3 items-start px-3 py-2 cursor-pointer transition hover:bg-sky-500/60 rounded-lg border-b border-gray-700">
      {/* Avatar */}
      <div className="relative">
        <img
          src="https://avatar.iran.liara.run/public/boy"
          alt="user avatar"
          className="w-12 h-12 rounded-full object-cover"
        />
        <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
      </div>

      <div>
        <h4 className="text-base font-medium text-white">John C.</h4>
        <p className="text-sm text-gray-300">Online</p>
      </div>
    </div>
  );
};

export default Conversation;