import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import Pagination from "../components/pagination";
import { useNavigate, useSearchParams } from "react-router-dom";

const Home = ({ tasks, setTasks, setIdEdit }) => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [filterName, setFilterName] = useState(tasks);
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get("q") || "");
  const [currentPage, setCurrentPage] = useState(
    parseInt(searchParams.get("page")) || 1
  );
  
  const tasksPerPage = 5;

  const indexOfLastTask = currentPage * tasksPerPage;
  const indexOfFirstTask = indexOfLastTask - tasksPerPage;

  const currentTasks = filterName.slice(indexOfFirstTask, indexOfLastTask);
  const navigate = useNavigate();

  useEffect(() => {
    if (searchQuery) {
      const filteredData = tasks.filter((task) =>
        task.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilterName(filteredData);
    } else {
      setFilterName(tasks);
    }
  }, [tasks]);

  const SearchingData = (e, searchQuery) => {
    e.preventDefault();
    setSearchParams({ q: searchQuery });
    if (searchQuery === "") {
      setFilterName(tasks);
    } else {
      const filteredData = tasks.filter((task) =>
        task.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilterName(filteredData);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    setSearchParams({ q: searchQuery, page: page });
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (!title || !category || !description) {
      alert("All fields are required!");
      return;
    }
    const newTask = { id: tasks.length + 1, title, description, category };
    setTasks([...tasks, newTask]);
    setTitle("");
    setCategory("");
    setDescription("");
  };

  const handleEdit = (e, id) => {
    e.preventDefault();
    setIdEdit(id);
    navigate("/EditTask");
  };
  const handleDelete = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  return (
    <div className="bg-white min-h-screen font-roboto dark:bg-slate-800 dark:text-white">
      <Navbar />
      <div className="p-4">
        <div className="form-portion sm:w-[80%] w-[90%] mx-auto">
          <form className="p-5 mt-5 ">
            <div className="flex md:flex-row flex-col justify-evenly">
              <label htmlFor="title" className="text-xl md:mb-0 mb-1">
                Title
              </label>
              <input
                type="text"
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter your full name"
                className="md:w-[35%] w-1/1 px-4 py-2 md:mb-0 mb-3 border border-black rounded-xl text-black"
              />
              <label htmlFor="category" className="text-xl md:mb-0 mb-1">
                Category
              </label>
              <input
                type="text"
                name="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                placeholder="Enter your category"
                className="md:w-[35%] w-1/1 px-4 py-2 border border-black rounded-xl text-black"
              />
            </div>
            <div className="md:p-5 p-1 sm:mt-1 mt-1">
              <div className="md:mt-1 mt-2">
                <label htmlFor="description" className="text-xl">
                  Description
                </label>
                <br />
                <input
                  type="text"
                  name="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Mention your area of concern"
                  className=" w-[100%] px-4 py-2 mt-1 border border-black rounded-xl text-black"
                />
              </div>
            </div>
            <div className="btn mt-2 w-[100%] bg-transparent flex items-center">
              <button
                onClick={(e) => handleSave(e)}
                className="px-4 py-2 mx-auto rounded-xl text-center text-xl bg-black border border-black text-white hover:text-black hover:bg-white hover:font-bold hover:shadow-xl"
              >
                Add New
              </button>
            </div>
          </form>
        </div>
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center border rounded-lg overflow-hidden">
            <input
              onChange={(e) => {
                setSearchQuery(e.target.value);
                if (e.target.value === "") setFilterName(tasks);
                setSearchParams({ q: e.target.value, page: 1 });
              }}
              value={searchQuery}
              type="text"
              placeholder="Search name here..."
              className="p-2 outline-none text-black"
            />
            <button
              onClick={(e) => SearchingData(e, searchQuery)}
              className="bg-blue-600 text-white p-2"
            >
              Submit
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border rounded-lg dark:bg-slate-800 dark:text-white">
            <thead>
              <tr className="border-b">
                <th className="p-2 text-left">Title</th>
                <th className="p-2 text-left">Category</th>
                <th className="p-2 text-left">Description</th>
                <th className="p-2 text-left">Action</th>
                <th className="p-2 text-left"></th>
              </tr>
            </thead>
            <tbody>
              {currentTasks.map((item, index) => (
                <tr key={item.id} className="border-b">
                  <td className="p-2 text-blue-600">{item.title}</td>
                  <td className="p-2">{item.category}</td>
                  <td className="p-2">{item.description}</td>
                  <td className="p-2 space-x-3 flex">
                    <button
                      onClick={(e) => handleEdit(e, item.id)}
                      className="rounded-xl font-medium text-sm shadow-md px-2 py-1 bg-yellow-300"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="rounded-xl font-medium text-sm shadow-md px-2 py-1 bg-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mx-auto w-full dark:bg-slate-800 dark:text-white">
            <Pagination
              currentPage={currentPage}
              totalPages={Math.ceil(filterName.length / tasksPerPage)}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
