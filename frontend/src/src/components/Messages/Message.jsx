import useConversation from "../../zustand/useConversation";
import { useAuthContext } from "../../context/AuthContext";

const Message = ({ message }) => {
  const { selectedConversation } = useConversation();
  const { authUser } = useAuthContext();

  if (!message || !message.senderId || !selectedConversation || !authUser) {
    return null;
  }

  const fromMe = message.senderId === authUser._id;
  const chatClass = fromMe ? "chat-end" : "chat-start";
  const bubbleColor = fromMe ? "bg-blue-500" : "bg-gray-700";

  return (
    <div className={`chat ${chatClass}`}>
      <div className={`chat-bubble text-white ${bubbleColor}`}>
        <p>{message.message}</p>
        <span className="text-xs text-white/70 block mt-1">
          {new Date(message.createdAt).toLocaleTimeString()}
        </span>
      </div>
    </div>
  );
};

export default Message;
