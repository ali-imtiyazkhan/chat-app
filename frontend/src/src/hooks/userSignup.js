import { useState } from "react";
import { toast } from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const handleInputErrors = ({ fullName, username, password, confirmPassword, gender }) => {
  if (!fullName || !username || !password || !confirmPassword || !gender) {
    toast.error("All fields are required.");
    return false;
  }

  if (password !== confirmPassword) {
    toast.error("Passwords do not match.");
    return false;
  }

  if (password.length < 6) {
    toast.error("Password must be at least 6 characters.");
    return false;
  }

  return true;
};

const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const {setAuthUser} = useAuthContext()

  const signup = async (fullName, username, password, confirmPassword, gender) => {
    console.log("chechking inputs:", fullName, username, password, confirmPassword, gender);
    const isValid = handleInputErrors({ fullName, username, password, confirmPassword, gender });
    if (!isValid)
    {
      console.log("Inputs are invalid") ;
      return;
    }
    console.log("passed input check")
console.log("reached in signup")
    try {
      setLoading(true);
console.log("sendig request:")
      const res = await fetch("http://localhost:4000/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          fullname: fullName,
          username,
          password,
          confirmpassword: confirmPassword,
          gender,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Signup failed.");
      }

      toast.success(data.message || "User signed up successfully!");

     localStorage.setItem("chat-user",JSON.stringify(data));
     setAuthUser(data);

    } catch (error) {
      console.error("Signup failed:", error);
      toast.error(error.message || "Signup failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return { loading, signup };
};

export default useSignup;
