import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/login";
import PrivateRoute from "./components/privateRoute";
import EditProfile from "./pages/EditProfile";
import { useEffect, useState } from "react";
import EditTask from "./pages/EditTask";
import ViewTask from "./pages/ViewTask";
import Navbar from "./components/navbar";

function App() {
  const getTaskLocal = JSON.parse(localStorage.getItem("tasks")) || [
    {
      id: 1,
      title: "Study Group",
      category: "Designer",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
    },
  ];

  const getDarkMode = localStorage.getItem("darkMode") || "system";
  const [isDarkmode, SetIsDarkmode] = useState(getDarkMode);
  const [tasks, setTasks] = useState(getTaskLocal);
  
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);  

  useEffect(() => {
    localStorage.setItem("darkMode", isDarkmode);
    if (isDarkmode === "dark" || (isDarkmode === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDarkmode]);


  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Home tasks={tasks} setTasks={setTasks} isDarkmode={isDarkmode} SetIsDarkmode={SetIsDarkmode}  /> } />
          <Route path="/EditProfile" element={<EditProfile  isDarkmode={isDarkmode} SetIsDarkmode={SetIsDarkmode} />} />
          <Route path="/EditTask" element={<EditTask tasks={tasks} setTasks={setTasks} isDarkmode={isDarkmode} SetIsDarkmode={SetIsDarkmode}  />} />
          <Route path="/ViewTask" element={<ViewTask tasks={tasks} isDarkmode={isDarkmode} SetIsDarkmode={SetIsDarkmode} />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
