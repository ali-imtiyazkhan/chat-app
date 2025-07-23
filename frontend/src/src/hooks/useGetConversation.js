import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

const useGetConversation = () => {
  const [loading, setLoading] = useState(false);
  const [conversations, setConversations] = useState([]);

  useEffect(() => {
    const getConversation = async () => {
      setLoading(true);

      try {
        const res = await fetch("http://localhost:4000/api/users", {
          method: "GET",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
        });

        const data = await res.json();
        console.log(data);

        const unique = Array.from(new Map(data.map(u => [u._id, u])).values());

        setConversations(prev => {
          const prevIds = prev.map(u => u._id).sort().join(",");
          const newIds = unique.map(u => u._id).sort().join(",");
          return prevIds !== newIds ? unique : prev;
        });

      } catch (err) {
        toast.error("Failed to fetch conversations");
        console.error("Fetch error:", err.message);
      } finally {
        setLoading(false);
      }
    };

    getConversation();
  }, []);

  return { loading, conversations };
};

export default useGetConversation;
