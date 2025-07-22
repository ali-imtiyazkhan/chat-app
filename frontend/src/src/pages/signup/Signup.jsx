import React, { useState } from 'react';
import GenderCheckbox from './GenderCheckbox';
import { Link } from 'react-router-dom';
import { LogIn } from 'lucide-react';
import useSignup from '../../hooks/userSignup';

const Signup = () => {
  const [inputs, setInputs] = useState({
    fullName: '',
    username: '', 
    password: '',
    confirmPassword: '',
    gender: '',
  });

  const { loading, signup } = useSignup();

  const handleChange = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleGenderChange = (gender) => {
    setInputs((prev) => ({
      ...prev,
      gender,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(
      inputs.fullName,
      inputs.username,
      inputs.password,
      inputs.confirmPassword,
      inputs.gender
    );
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen min-w-96 mx-auto">
      <div className="w-full max-w-md p-6 rounded-lg shadow-md bg-clip-padding">
        <h2 className="text-3xl font-semibold text-center text-white mb-6">
          Sign Up <span className="text-blue-500">chatApp</span>
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Full Name */}
          <div>
            <label className="label p-0 mb-1">
              <span className="text-base text-white">Full Name</span>
            </label>
            <input
              type="text"
              name="fullName"
              placeholder="Enter your full name"
              className="input input-bordered w-full"
              value={inputs.fullName}
              onChange={handleChange}
            />
          </div>

          {/* Username */}
          <div>
            <label className="label p-0 mb-1">
              <span className="text-base text-white">Username</span>
            </label>
            <input
              type="text"
              name="username"
              placeholder="Enter your username"
              className="input input-bordered w-full"
              value={inputs.username}
              onChange={handleChange}
            />
          </div>

          {/* Password */}
          <div>
            <label className="label p-0 mb-1">
              <span className="text-base text-white">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="input input-bordered w-full"
              value={inputs.password}
              onChange={handleChange}
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="label p-0 mb-1">
              <span className="text-base text-white">Confirm Password</span>
            </label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm your password"
              className="input input-bordered w-full"
              value={inputs.confirmPassword}
              onChange={handleChange}
            />
          </div>

          {/* Gender */}
          <GenderCheckbox selectedGender={inputs.gender} onChange={handleGenderChange} />

          {/* Already have account */}
          <div className="text-sm mt-2">
            <Link to="/login" className="text-blue-400 hover:underline flex items-center gap-1">
              <LogIn className="w-4 h-4" />
              Already have an account?
            </Link>
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="btn btn-primary w-full mt-4"
            disabled={loading}
          >
            {loading ? "Creating Account..." : "Create Account"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
