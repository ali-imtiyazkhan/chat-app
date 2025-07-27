import { useEffect, useRef } from "react";
import useConversation from "../../zustand/useConversation";
import useGetMessages from "../../hooks/useGetMessage";
import useListenMessages from "../../hooks/useListenMessages";
import { useAuthContext } from "../../context/AuthContext";

const Messages = () => {
  const { messages } = useConversation();
  const { loading } = useGetMessages();
  useListenMessages();
  const { authUser } = useAuthContext();

  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  if (loading) {
    return (
      <p className="text-center my-2 text-gray-500">Loading messages...</p>
    );
  }

  const validMessages = Array.isArray(messages) ? messages : [];

  return (
    <div className="flex-1 overflow-y-auto p-4">
      {validMessages.length > 0 ? (
        validMessages.map((msg, index) => {
          const fromMe = msg.senderId === authUser?._id;
          const chatClass = fromMe ? "chat-end" : "chat-start";
          const bubbleColor = fromMe ? "bg-blue-500" : "bg-gray-700";

          return (
            <div
              key={msg._id || `${msg.createdAt}-${index}`}
              className={`chat ${chatClass}`}
            >
              <div className={`chat-bubble text-white ${bubbleColor}`}>
                <p>{msg.message}</p>
                <small className="text-xs text-gray-200 block text-right">
                  {msg.createdAt
                    ? new Date(msg.createdAt).toLocaleTimeString()
                    : "Just now"}
                </small>
              </div>
            </div>
          );
        })
      ) : (
        <p className="text-center text-gray-400">No messages yet</p>
      )}

      <div ref={bottomRef} />
    </div>
  );
};

export default Messages;
