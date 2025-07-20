export const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto min-h-screen">
      <div className="w-full max-w-md p-6 rounded-lg shadow-md bg-clip-padding">
        <h2 className="text-3xl font-semibold text-center mb-6 text-white">
          Login <span className="text-gray-300">chatApp</span>
        </h2>

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

          <button type="submit" className="btn btn-primary w-full mt-4">
            Login
          </button>

          <p className="text-center text-white">
            Don&apos;t have an account?{' '}
          </p>
        </form>
      </div>
    </div>
  )
}
