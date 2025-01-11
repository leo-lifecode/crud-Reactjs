import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/login";
import PrivateRoute from "./components/privateRoute";
import EditProfile from "./pages/EditProfile";
import { useEffect, useState } from "react";
import EditTask from "./pages/EditTask";

function App() {
  const getTaskLocal = JSON.parse(localStorage.getItem("tasks")) || [
    {
      id: 1,
      title: "Study Group",
      category: "Designer",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
    },
  ];

  const [tasks, setTasks] = useState(getTaskLocal);
  const [idEdit , setIdEdit] = useState(null);
  
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);  

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Home  tasks={tasks} setTasks={setTasks} setIdEdit={setIdEdit} /> } />
          <Route path="/EditProfile" element={<EditProfile />} />
          <Route path="/EditTask" element={<EditTask tasks={tasks} setTasks={setTasks} idEdit={idEdit} setIdEdit={setIdEdit} />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
