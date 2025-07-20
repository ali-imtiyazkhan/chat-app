import React from 'react'
import GenderCheckbox from './GenderCheckbox'

const Signup = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen min-w-96 mx-auto">
      <div className="w-full max-w-md p-6 rounded-lg shadow-md bg-clip-padding">
        <h2 className="text-3xl font-semibold text-center text-white mb-6">
          Sign Up <span className="text-blue-500">chatApp</span>
        </h2>

        {/* Signup form starts here */}
        <form className="space-y-4">
          <div>
            <label className="label p-0 mb-1">
              <span className="text-base text-white">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter your username"
              className="input input-bordered w-full"
            />
          </div>

          <div>
            <label className="label p-0 mb-1">
              <span className="text-base text-white">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="input input-bordered w-full"
            />
          </div>

          <div>
            <label className="label p-0 mb-1">
              <span className="text-base text-white">Confirm Password</span>
            </label>
            <input
              type="password"
              placeholder="Confirm your password"
              className="input input-bordered w-full"
            />
          </div>

          <GenderCheckbox/>

          <div className="text-sm mt-2">
            <a href="#" className="text-blue-400 hover:underline">
              Already have an account?
            </a>
          </div>

          <button type="submit" className="btn btn-primary w-full mt-4">
            Create Account
          </button>
        </form>
      </div>
    </div>
  )
}

export default Signup
