import { useEffect } from "react";
import { useSocketContext } from "../context/SocketContext";
import useConversation from "../zustand/useConversation";
import { useAuthContext } from "../context/AuthContext"; // ✅

const useListenMessages = () => {
  const { socket } = useSocketContext();
  const { addMessage } = useConversation();
  const { authUser } = useAuthContext(); // ✅ get current user

  useEffect(() => {
    if (!socket) return;

    const handleNewMessage = (newMessage) => {
      // ❌ Prevent duplicate message if it's sent by yourself
      if (newMessage.senderId === authUser?._id) return;

      addMessage(newMessage);
    };

    socket.on("newMessage", handleNewMessage);

    return () => socket.off("newMessage", handleNewMessage);
  }, [socket, addMessage, authUser]);
};

export default useListenMessages;
