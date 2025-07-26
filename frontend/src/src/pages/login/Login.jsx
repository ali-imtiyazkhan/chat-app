import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/userLogIn";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { loading, login } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username, password);
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto min-h-screen">
      <div className="w-full max-w-md p-6 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold text-center mb-6 text-white">
          Login <span className="text-gray-300">chatApp</span>
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="label p-0 mb-1">
              <span className="text-base text-white">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter your username"
              className="input input-bordered w-full text-white"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="label p-0 mb-1">
              <span className="text-base text-white">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="input input-bordered w-full text-white"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary w-full mt-4"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>

          <div className="text-center mt-4">
            <Link to="/signup" className="text-blue-400 hover:underline">
              Don&apos;t have an account?
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};