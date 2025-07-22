import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import { toast } from "react-hot-toast";

const useLogout = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const logout = async () => {
    setLoading(true);
    try {
      const res = await fetch("http://localhost:5000/api/auth/logout", {
        method: "POST",
        headers:{"content-Type":"application/json"}
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Logout failed.");
      }

      // Remove user from localStorage and context
      localStorage.removeItem("chat-user");
      setAuthUser(null);
      toast.success("Logged out successfully!");
    } catch (error) {
      console.error("Logout error:", error);
      toast.error(error.message || "Logout failed.");
    } finally {
      setLoading(false);
    }
  };

  return { logout, loading };
};

export default useLogout;
