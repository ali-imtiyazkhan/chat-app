import React from 'react';
import SearchInput from './SearchInput';
import Conversations from './Conversations';

const Sidebar = () => {
  return (
    <div className="h-full w-67 px-4 py-6 border bg-gray-900 border-gray-700 flex flex-col -ml-4">
      <SearchInput />
      <div className="mt-5 flex-1 overflow-y-auto custom-scrollbar pr-1">
        <Conversations />
      </div>
    </div>
  );
};

export default Sidebar;
