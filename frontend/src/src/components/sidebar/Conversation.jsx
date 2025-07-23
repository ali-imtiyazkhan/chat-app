import React from "react";
import useGetConversation from "../../hooks/useGetConversation";
import useConversation from "../../zustand/useConversation";

const Conversations = () => {
  const { loading, conversations } = useGetConversation();
  const { selectedConversation, setSelectedConversation } = useConversation();

  if (loading) return <p className="text-white">Loading conversations...</p>;

  return (
    <div className="text-white">
      <h2 className="text-xl font-bold mb-4">Conversations</h2>

      {conversations.length === 0 ? (
        <p className="text-gray-400">No conversations found.</p>
      ) : (
        <ul className="space-y-2">
          {conversations.map((user) => (
            <li
              key={user._id}
              className={`flex items-center space-x-4 p-2 rounded-lg cursor-pointer transition duration-300 ${
                selectedConversation?._id === user._id
                  ? "bg-gray-700"
                  : "hover:bg-gray-700"
              }`}
              onClick={() => setSelectedConversation(user)}
            >
              <img
                src={user.profilePic}
                alt={user.fullName}
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="font-semibold text-white">{user.fullName}</p>
                <p className="text-sm text-gray-400">@{user.username}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Conversations;
