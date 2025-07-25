import { useEffect, useRef } from "react";
import useConversation from "../../zustand/useConversation";
import useGetMessages from "../../hooks/useGetMessage";

const Messages = () => {
  const { messages } = useConversation();
  const { loading } = useGetMessages();
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  if (loading) return <p className="text-center my-2 text-gray-500">Loading messages...</p>;

  return (
    <div className="flex-1 overflow-y-auto p-4">
      {messages?.length > 0 ? (
        messages.map((msg, index) => (
          <div key={msg._id || `${msg.createdAt}-${index}`} className="mb-2">
            <div className="p-2 rounded bg-gray-100 dark:bg-gray-800 w-fit max-w-xs">
              <p>{msg.message}</p>
              <small className="text-xs text-gray-500">
                {msg.createdAt
                  ? new Date(msg.createdAt).toLocaleTimeString()
                  : "Just now"}
              </small>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-400">No messages yet</p>
      )}

      <div ref={bottomRef} />
    </div>
  );
};

export default Messages;