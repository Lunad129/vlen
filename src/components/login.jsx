import React, { useState } from 'react';
import { FaUser, FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPwd, setShowPwd] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send username and password to backend for authentication
    // Backend will determine if user is admin, lecturer, or student
    alert(`Username: ${username}\nPassword: ${password}`);
  };

  return (
    <div className="bg-slate-800 text-white rounded-2xl max-w-md mx-auto mt-16 p-8 shadow-2xl font-sans relative">
      <div className="flex items-center mb-8">
        
        <h2 className="text-xl font-semibold m-0">Login to EduPortal</h2>
        <button
          className="ml-auto text-2xl text-white hover:text-gray-300"
          title="Close"
          type="button"
        >
          &times;
        </button>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="mb-5">
          <label className="font-medium text-base">Username</label>
          <div className="flex items-center bg-slate-700 rounded-lg px-3 py-2 mt-2 border border-slate-800 focus-within:border-blue-500">
            <FaUser className="text-slate-400 mr-2" />
            <input
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={e => setUsername(e.target.value)}
              required
              className="bg-transparent border-none outline-none text-white text-base flex-1 placeholder-slate-400"
            />
          </div>
        </div>

        <div className="mb-7">
          <label className="font-medium text-base">Password</label>
          <div className="flex items-center bg-slate-700 rounded-lg px-3 py-2 mt-2 border border-slate-800 focus-within:border-blue-500">
            <input
              type={showPwd ? "text" : "password"}
              placeholder="Enter your password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
              className="bg-transparent border-none outline-none text-white text-base flex-1 placeholder-slate-400"
            />
            <button
              type="button"
              onClick={() => setShowPwd(s => !s)}
              className="ml-2 text-slate-400 hover:text-blue-400"
              tabIndex={-1}
              aria-label={showPwd ? "Hide password" : "Show password"}
            >
              {showPwd ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg py-3 font-semibold text-lg shadow hover:from-purple-600 hover:to-blue-600 transition-all"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;