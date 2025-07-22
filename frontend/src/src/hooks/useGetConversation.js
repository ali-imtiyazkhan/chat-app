import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

const useGetConversation = () => {
    const [loading, setLoading] = useState(false);
    const [conversations, setConversations] = useState([]);

    useEffect(() => {
        const getConversation = async () => {
            setLoading(true);
            const toastId = toast.loading("Fetching conversations...");

            try {
                const res = await fetch("http://localhost:4000/api/users", {
                    method: "GET",
                    credentials: "include",
                    headers: {
                        "Content-Type": "application/json",
                    },
                });

                if (!res.ok) {
                    if (res.status === 401) {
                        throw new Error("Unauthorized");
                    }
                    throw new Error("Failed to fetch");
                }

                const data = await res.json();
                setConversations(data); 
                console.log("data: ",data);
                console.log("conversations: ", conversations)
                toast.success("Conversations loaded");
            } catch (error) {
                if (error.message === "Unauthorized") {
                    toast.error("Please log in to see conversations.");
                } else {
                    toast.error("Failed to fetch conversations.");
                }
                console.error("Conversation fetch failed:", error.message);
            } finally {
                toast.dismiss(toastId);
                setLoading(false);
            }
        };

        getConversation();
    }, []);

    return { loading, conversations };
};

export default useGetConversation;
