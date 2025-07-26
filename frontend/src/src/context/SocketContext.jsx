import { useEffect, useState, createContext, useContext } from "react";
import { useAuthContext } from "./AuthContext";
import io from "socket.io-client";

// ✅ Create context
export const SocketContext = createContext();

// ✅ Custom hook to use the socket context
export const useSocketContext = () => {
  return useContext(SocketContext);
};

// ✅ Context provider
export const SocketContextProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const { authUser } = useAuthContext();

  useEffect(() => {
    if (authUser) {
      const newSocket = io("http://localhost:4000", {
        query: { userId: authUser._id },
      });

      setSocket(newSocket);

      // ✅ Listen to online users
      newSocket.on("get-online-users", (users) => {
        setOnlineUsers(users);
      });

      return () => newSocket.close();
    } else {
      if (socket) {
        socket.close();
        setSocket(null);
      }
    }
  }, [authUser]);

  return (
    <SocketContext.Provider value={{ socket, onlineUsers }}>
      {children}
    </SocketContext.Provider>
  );
};
