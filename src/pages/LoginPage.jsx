import React from 'react'

const LoginPage = () => {
  return (
    <>
    <div className="min-h-screen flex items-center justify-center bg-base-200 p-4">
      <div className="card w-full max-w-sm shadow-2xl bg-base-100">
        <form className="card-body">
          <h2 className="text-2xl font-bold text-center">Login</h2>

          {/* Email Input */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="input input-bordered"
              required
            />
          </div>

          {/* Password Input */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>

          {/* Login Button */}
          <div className="form-control mt-4">
            <button className="btn btn-warning font-serif bg-yellow-500 text-red-500">Login</button>
          </div>

          {/* Optional: Signup Link */}
          <p className="text-center text-sm mt-2">
            Don’t have an account?{' '}
            <a href="/Signup" className="link link-hover text-primary">
              Sign up
            </a>
          </p>
        </form>
      </div>
    </div></>
  )
}

export default LoginPage