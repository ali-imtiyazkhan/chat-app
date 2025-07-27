import { useState } from 'react';
import useConversation from '../zustand/useConversation';

const useClearMessages = () => {
  const [loading, setLoading] = useState(false);
  const { selectedConversation, setMessages } = useConversation();

  const clearMessages = async () => {
    if (!selectedConversation) return;
    setLoading(true);
    try {
      console.log("Clearing messages for conversation ID:", selectedConversation._id);

      const res = await fetch(`http://localhost:4000/api/messages/clear/${selectedConversation._id}`, {
        method: 'DELETE',
        credentials: 'include',
      });

      const data = await res.json();
      if (!data.success) throw new Error(data.message);

      setMessages([]); // ✅ clear frontend state too
    } catch (error) {
      console.error("Clear messages error:", error.message);
    } finally {
      setLoading(false);
    }
  };

  return { clearMessages, loading };
};

export default useClearMessages;
