import { createContext, useContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const useAuthContext = () => {
    return useContext(AuthContext);
};

export const AuthContextProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const storedUser = localStorage.getItem("chat-user");
      if (storedUser) {
        setAuthUser(JSON.parse(storedUser));
      }
    } catch (error) {
      console.error("Error parsing user from localStorage", error);
    } finally {
      setLoading(false);
    }
  }, []); 

  const value = { authUser, setAuthUser, loading };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};