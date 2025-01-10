import React, { useState } from "react";
import Navbar from "../components/navbar";

const EditProfile = () => {
  const [form, setForm] = useState({
      username: localStorage.getItem('username'),
      password: "",
    });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleEdit = (e) => {
    e.preventDefault();
    localStorage.setItem("username", form.username);
    localStorage.setItem("password", form.password);
    localStorage.setItem("isAuthenticated", true);
    window.location.href = "/";
  };

  return (
    <div>
      <Navbar />
      <section className="overflow-hidden pt-12 pb-6 px-4 bg-white dark:bg-dark">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center justify-between -mx-4">
            <div className="w-full px-4 ">
                <div className="mt-10 lg:mt-0">
                    <span className="block mb-4 text-lg font-semibold text-primary">
                    Edit Profile
                    </span>
                    <form onSubmit={handleEdit}>
                        <div class="w-full md:w-1/2 lg:w-1/3">
                            <div class="mb-5">
                                <label class="mb-[10px] block text-base font-medium text-dark dark:text-white">
                                Username
                                </label>
                                <div class="relative">
                                <input
                                    name="username"
                                    type="text"
                                    value={form.username}
                                    onChange={handleChange}
                                    placeholder="Your Username"
                                    class="w-full bg-transparent rounded-md border border-stroke dark:border-dark-3 py-[10px] pr-3 pl-12 text-dark-6 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2"
                                />
                                <span class="absolute top-1/2 left-4 -translate-y-1/2">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g opacity="0.8">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M3.72039 12.8864C4.50179 12.105 5.5616 11.666 6.66667 11.666H13.3333C14.4384 11.666 15.4982 12.105 16.2796 12.8864C17.061 13.6678 17.5 14.7276 17.5 15.8327V17.4993C17.5 17.9596 17.1269 18.3327 16.6667 18.3327C16.2064 18.3327 15.8333 17.9596 15.8333 17.4993V15.8327C15.8333 15.1696 15.5699 14.5338 15.1011 14.0649C14.6323 13.5961 13.9964 13.3327 13.3333 13.3327H6.66667C6.00363 13.3327 5.36774 13.5961 4.8989 14.0649C4.43006 14.5338 4.16667 15.1696 4.16667 15.8327V17.4993C4.16667 17.9596 3.79357 18.3327 3.33333 18.3327C2.8731 18.3327 2.5 17.9596 2.5 17.4993V15.8327C2.5 14.7276 2.93899 13.6678 3.72039 12.8864Z" fill="#9CA3AF" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10.0007 3.33268C8.61994 3.33268 7.50065 4.45197 7.50065 5.83268C7.50065 7.21339 8.61994 8.33268 10.0007 8.33268C11.3814 8.33268 12.5006 7.21339 12.5006 5.83268C12.5006 4.45197 11.3814 3.33268 10.0007 3.33268ZM5.83398 5.83268C5.83398 3.5315 7.69946 1.66602 10.0007 1.66602C12.3018 1.66602 14.1673 3.5315 14.1673 5.83268C14.1673 8.13387 12.3018 9.99935 10.0007 9.99935C7.69946 9.99935 5.83398 8.13387 5.83398 5.83268Z" fill="#9CA3AF" />
                                    </g>
                                </svg>
                                </span>
                                </div>
                            </div>
                            <button className='bg-yellow-400 border rounded-full inline-flex items-center justify-center py-3 px-7 text-center text-base font-medium text-white hover:bg-yellow-600 me-2'>
                             Submit
                            </button>
                            <a href="/" className="bg-black border rounded-full inline-flex items-center justify-center py-3 px-7 text-center text-base font-medium text-white hover:bg-slate-900">
                            cancel
                            </a>
                        </div>
                    </form>
                </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EditProfile;
