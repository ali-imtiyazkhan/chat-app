import { useEffect, useState } from "react";
import useConversation from "../zustand/useConversation";

const useGetMessages = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();

  useEffect(() => {
    const getMessages = async () => {
      if (!selectedConversation?._id) return;
      setLoading(true);

      try {
        const res = await fetch(`http://localhost:4000/api/messages/${selectedConversation._id}`, {
          credentials: 'include',
        });
        const data = await res.json();
        console.log("data: ",data.data);
        if (!res.ok) throw new Error(data?.message || "Failed to fetch messages");

        if (Array.isArray(data.data)) {
          setMessages(data.data);
        } else {
          console.warn("Unexpected messages format:", data.data);
        }

      } catch (error) {
        console.error("Failed to fetch messages:", error.message);
      } finally {
        setLoading(false);
      }
    };

    getMessages();
  }, [selectedConversation, setMessages]);

  return { loading, messages };
};

export default useGetMessages;