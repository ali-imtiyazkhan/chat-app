import useConversation from "../../zustand/useConversation";

const Message = ({ message }) => {
  const { selectedConversation, user } = useConversation();

  if (!message || !message.senderId || !selectedConversation || !user) {
    return null;
  }

  const fromMe = message.senderId === user._id;
  const chatClass = fromMe ? "chat-end" : "chat-start";
  const bubbleColor = fromMe ? "bg-blue-500" : "bg-gray-700";

  return (
    <div className={`chat ${chatClass}`}>
      <div className={`chat-bubble text-white ${bubbleColor}`}>
        {message.message}
      </div>
    </div>
  );
};

export default Message;
