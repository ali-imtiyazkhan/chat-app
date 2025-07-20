import React from 'react';

const MessageInput = () => {
  return (
    <form className="px-4 py-2 border-t border-gray-700 bg-[#0F172A]">

      <div className="w-full flex items-center gap-2">
        <input
          type="text"
          placeholder="Type your message..."
          className="flex-1 px-4 py-2 rounded-full bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-sky-500"
        />
        <button
          type="submit"
          className="bg-sky-600 text-white px-4 py-2 rounded-full hover:bg-sky-700 transition"
        >
          Send
        </button>
      </div>
    </form>
  );
};

export default MessageInput;
