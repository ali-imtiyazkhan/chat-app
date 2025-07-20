import { MessageSquare, Users, Settings, LogOut, Search } from 'lucide-react';

const SearchInput = () => {
  return (
    <div className="flex flex-col items-start text-white">
      <h2 className="text-2xl font-bold mb-4">Chats</h2>

      {/* Search Bar */}
      <div className="relative mb-6 w-full">
        <input
          type="text"
          placeholder="Search chats or users"
          className="w-full pl-10 pr-3 py-2 rounded-md border border-gray-600 bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500"
        />
        <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
      </div>

      {/* Nav Items */}
      <ul className="space-y-4 w-full">
        <li className="flex items-center gap-2 hover:text-sky-400 cursor-pointer">
          <MessageSquare className="w-5 h-5" />
          <span>Chats</span>
        </li>
        <li className="flex items-center gap-2 hover:text-sky-400 cursor-pointer">
          <Users className="w-5 h-5" />
          <span>Contacts</span>
        </li>
        <li className="flex items-center gap-2 hover:text-sky-400 cursor-pointer">
          <Settings className="w-5 h-5" />
          <span>Settings</span>
        </li>
      </ul>

      {/* Logout */}
      <div className="mt-6 flex items-center gap-2 text-red-500 hover:text-red-700 font-medium cursor-pointer">
        <LogOut className="w-5 h-5" />
        <span>Logout</span>
      </div>
    </div>
  );
};

export default SearchInput;