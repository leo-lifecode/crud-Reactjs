import { useState, useEffect } from "react";

const useTasks = (initialTasks) => {
  const [tasks, setTasks] = useState(initialTasks);
  const [filterName, setFilterName] = useState(initialTasks);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setFilterName(tasks);
  }, [tasks]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const searchTask = (searchQuery) => {
    if (searchQuery === "") {
      setFilterName(tasks);
    } else {
      setFilterName(
        tasks.filter((task) =>
          task.fullName.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    }
  };

  return {
    tasks,
    setTasks,
    filterName,
    search,
    setSearch,
    addTask,
    deleteTask,
    searchTask,
  };
};

export default useTasks;
