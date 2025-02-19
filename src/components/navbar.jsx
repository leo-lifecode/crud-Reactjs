import React from "react";
import useDropdown from "../../src/hooks/useDropdown";
import TrigDarkmode from "./TrigDarkmode";

const Navbar = ({ isDarkmode, SetIsDarkmode}) => {
  const username = localStorage.getItem("username");
  const { dropdownOpen, setDropdownOpen, trigger, dropdown } = useDropdown();
  const { dropdownOpen: dropdownTwoOpen, setDropdownOpen: setDropdownTwoOpen, trigger: triggerTwo, dropdown: dropdownTwo,} = useDropdown();

  const handleLogout = () => {
    localStorage.setItem("isAuthenticated", false);
    window.location.href = "/login";
  };

  return (
    <nav className="dark:bg-slate-900 dark:text-white bg-yellow-300 shadow-lg w-full flex relative justify-between items-center mx-auto px-8 h-16">
      <div className="inline-flex">
        <span className="dark:bg-white bg-black rounded-full w-8 h-8"></span>
        <a href="/" className="font-medium text-xl ps-2">
          CRUD
        </a>
      </div>

      <div className="flex-initial">
        <div className="flex justify-end items-center relative">
          <div className="flex gap-2 relative">
            <TrigDarkmode isDarkmode={isDarkmode} triggerTwo={triggerTwo} setDropdownTwoOpen={setDropdownTwoOpen} dropdownTwoOpen={dropdownTwoOpen} />
            <div ref={dropdownTwo} className={`absolute z-50 top-full right-[-50px] bg-white rounded-lg ring-1 ring-slate-900/10 shadow-lg overflow-hidden w-36 py-1 text-sm text-slate-700 font-semibold dark:bg-slate-800 dark:ring-0 dark:highlight-white/5 dark:text-slate-300 mt-8 ${dropdownTwoOpen ? "block" : "hidden" }`}>
              <div className="py-1 px-2 ">
                <button onClick={() => SetIsDarkmode('light')} className="flex items-center cursor-pointer w-full ">
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 mr-2">
                    <path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" className="fill-sky-400/20 stroke-slate-500" ></path>
                    <path d="M12 4v1M17.66 6.344l-.828.828M20.005 12.004h-1M17.66 17.664l-.828-.828M12 20.01V19M6.34 17.664l.835-.836M3.995 12.004h1.01M6 6l.835.83" className="stroke-slate-500" ></path>
                  </svg>
                  Light
                </button>
              </div>
              <div className="py-1 px-2 flex items-center ">
                <button onClick={() => SetIsDarkmode('dark')}  className="flex items-center cursor-pointer w-full">
                  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 mr-2">
                    <path fillRule="evenodd" clipRule="evenodd" d="M17.715 15.15A6.5 6.5 0 0 1 9 6.035C6.106 6.922 4 9.645 4 12.867c0 3.94 3.153 7.136 7.042 7.136 3.101 0 5.734-2.032 6.673-4.853Z" className="fill-transparent" ></path>
                    <path d="m17.715 15.15.95.316a1 1 0 0 0-1.445-1.185l.495.869ZM9 6.035l.846.534a1 1 0 0 0-1.14-1.49L9 6.035Zm8.221 8.246a5.47 5.47 0 0 1-2.72.718v2a7.47 7.47 0 0 0 3.71-.98l-.99-1.738Zm-2.72.718A5.5 5.5 0 0 1 9 9.5H7a7.5 7.5 0 0 0 7.5 7.5v-2ZM9 9.5c0-1.079.31-2.082.845-2.93L8.153 5.5A7.47 7.47 0 0 0 7 9.5h2Zm-4 3.368C5 10.089 6.815 7.75 9.292 6.99L8.706 5.08C5.397 6.094 3 9.201 3 12.867h2Zm6.042 6.136C7.718 19.003 5 16.268 5 12.867H3c0 4.48 3.588 8.136 8.042 8.136v-2Zm5.725-4.17c-.81 2.433-3.074 4.17-5.725 4.17v2c3.552 0 6.553-2.327 7.622-5.537l-1.897-.632Z" className="fill-slate-400 dark:fill-slate-500" ></path>
                    <path fillRule="evenodd" clipRule="evenodd" d="M17 3a1 1 0 0 1 1 1 2 2 0 0 0 2 2 1 1 0 1 1 0 2 2 2 0 0 0-2 2 1 1 0 1 1-2 0 2 2 0 0 0-2-2 1 1 0 1 1 0-2 2 2 0 0 0 2-2 1 1 0 0 1 1-1Z" className="fill-slate-400 dark:fill-slate-500" ></path>
                  </svg>
                  Dark
                </button>
              </div>
              <div className="py-1 px-2 flex items-center">
                <button onClick={() => SetIsDarkmode('system')}  className="flex items-center cursor-pointer w-full">
                  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 mr-2">
                    <path d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6Z" strokeWidth="2" strokeLinejoin="round" className="stroke-slate-400 dark:stroke-slate-500" ></path>
                    <path d="M14 15c0 3 2 5 2 5H8s2-2 2-5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="stroke-slate-400 dark:stroke-slate-500" ></path>
                  </svg>
                  System
                </button>
              </div>
            </div>
          </div>
          <button ref={trigger} onClick={() => setDropdownOpen(!dropdownOpen)} className="ms-2 rounded-full bg-white border inline-flex items-center justify-center gap-2 px-2 py-2 text-base font-medium text-dark dark:border-dark-3 dark:bg-dark-2 dark:text-white" >
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png" className="w-auto h-6 rounded-full" />
            <span className="text-black dark:text-black">{username}</span>
            <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg" >
              <path d="M5 7L10 12L15 7" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <div ref={dropdown} className={`absolute right-0 top-full w-[240px] divide-y divide-stroke overflow-hidden rounded-lg bg-black dark:divide-dark-3 dark:bg-dark-2 ${
              dropdownOpen ? "block" : "hidden" }`} >
            <div>
              <a href="/EditProfile" className="flex w-full items-center justify-between px-4 py-2.5 text-sm font-medium text-white hover:bg-yellow-400 dark:text-white" >
                <span className="flex items-center gap-2">Edit profile</span>
              </a>
            </div>
            <div>
              <button onClick={handleLogout} className="flex w-full items-center justify-between px-4 py-2.5 text-sm font-medium text-white hover:bg-red-600 dark:text-white" >
                <span className="flex items-center gap-2">Log out</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
