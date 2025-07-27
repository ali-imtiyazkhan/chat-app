import { useState } from 'react';
import useConversation from '../zustand/useConversation';
import { useAuthContext } from '../context/AuthContext';

const useSendMessage = () => {
    const [loading, setLoading] = useState(false);
    const { messages, setMessages, selectedConversation } = useConversation();
    const { authUser } = useAuthContext();

    const sendMessage = async (message) => {
        setLoading(true);

        try {
            const res = await fetch(`http://localhost:4000/api/messages/send/${selectedConversation._id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
                body: JSON.stringify({ message }),
            });

            const data = await res.json();
            console.log("sent message, received res: ", data);

            if (data.error) {
                throw new Error(data.error);
            }

            // ✅ Fix: make sure senderId is from the logged-in user
            const newMessage = {
                ...data.data,
                senderId: authUser._id, // this ensures alignment works immediately
            };

            setMessages([...messages, newMessage]);
        } catch (error) {
            console.error("Send message error:", error.message);
        } finally {
            setLoading(false);
        }
    };

    return { sendMessage, loading };
};

export default useSendMessage;
