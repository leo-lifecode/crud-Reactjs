import React, { useState } from "react";

const Login = () => {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const handleLogin = (e) => {
    e.preventDefault();
    localStorage.setItem("username", form.username);
    localStorage.setItem("password", form.password);
    localStorage.setItem("isAuthenticated", true);
    window.location.href = "/";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <div className="bg-white flex min-h-screen font-roboto">
      <aside className="hidden lg:flex flex-col justify-between bg-yellow-300 p-8 xl:p-12 lg:max-w-sm xl:max-w-lg">
        <div className="flex items-center space-x-3"></div>
        <div className="space-y-5">
          <h1 className="text-3xl xl:text-5xl xl:leading-snug font-extrabold">
            Enter your account and discover new experiences
          </h1>
        </div>
        <p className="font-medium"></p>
      </aside>

      <main className="flex-1 flex flex-col items-center justify-center px-10 relative">
        <div className="flex flex-1 flex-col justify-center space-y-5 max-w-md">
          <div className="text-center space-y-2">
            <h2 className="text-3xl md:text-4xl font-bold">Login to account</h2>
          </div>
          <form onSubmit={handleLogin} className="flex flex-col space-y-5">
            <div className="space-y-5 flex flex-col">
              <input
                type="text"
                onChange={handleChange}
                value={form.username}
                name="username"
                placeholder="Username"
                className="px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg placeholder:font-normal"
              />
              <input
                type="password"
                onChange={handleChange}
                value={form.password}
                name="password"
                placeholder="Password"
                className="px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg placeholder:font-normal"
              />
            </div>
            <button className="px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg font-medium border-black bg-black text-white">
              Login
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Login;
