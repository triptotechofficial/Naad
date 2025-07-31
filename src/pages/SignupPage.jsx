import React from 'react'

const SignupPage = () => {
  return (
  <div className="min-h-screen flex items-center justify-center bg-base-200 p-4">
      <div className="card w-full max-w-sm shadow-2xl bg-base-100">
        <form className="card-body">
          <h2 className="text-2xl font-bold text-center">Sign Up</h2>

          {/* Name Input */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="input input-bordered"
              required
            />
          </div>

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
              placeholder="Create a password"
              className="input input-bordered"
              required
            />
          </div>

          {/* Signup Button */}
          <div className="form-control mt-4">
            <button className="btn btn-primary">Create Account</button>
          </div>

          {/* Optional: Login Link */}
          <p className="text-center text-sm mt-2">
            Already have an account?{' '}
            <a href="/login" className="link link-hover text-primary">
              Login here
            </a>
          </p>
        </form>
      </div>
    </div>
  )
}

export default SignupPage