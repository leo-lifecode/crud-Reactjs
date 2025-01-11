import { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import { useNavigate } from "react-router-dom";

const EditTask = ({ tasks, setTasks, idEdit, setIdEdit }) => {
  
  const task = tasks.find((task) => task.id === idEdit);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();
  
  useEffect(() => {
    if (task) {
      setTitle(task.title);
      setCategory(task.category);
      setDescription(task.description);
    }
  }, [task]);


  const handleEdit = (e) => {
    e.preventDefault();
    if (!title || !category || !description) {
      alert("All fields are required!");
      return;
    }
    const updatedTask = { ...task, title, description, category };
    const updatedTasks = tasks.map((task) =>
      task.id === idEdit ? updatedTask : task
    );
    setTasks(updatedTasks);
    setIdEdit(null);
    navigate("/");
  };

  return (
    <div>
      <Navbar />
      <h1 className="text-3xl font-bold text-center mt-5">Edit Data</h1>
      <div className="form-portion sm:w-[80%] w-[90%] mx-auto">
        <form className="p-5 mt-5" onSubmit={(e) => handleEdit(e)}>
          <div className="initials flex md:flex-row flex-col justify-evenly">
            <label htmlFor="title" className="text-xl md:mb-0 mb-1">
              Full Name
            </label>
            <input type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter your full name" className="md:w-[35%] w-1/1 px-4 py-2 md:mb-0 mb-3 border border-black rounded-xl"
            />
            <label htmlFor="category" className="text-xl md:mb-0 mb-1">
              category
            </label>
            <input type="category" name="category" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Enter your category" className="md:w-[35%] w-1/1 px-4 py-2 border border-black rounded-xl" />
          </div>
          <div className="md:p-5 p-1 sm:mt-1 mt-1">
            <div className="md:mt-1 mt-2">
              <label htmlFor="description" className="text-xl">
                description
              </label>
              <br />
              <input type="text" name="description" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Mention your area of concern" className=" w-[100%] px-4 py-2 mt-1 border border-black rounded-xl" />
            </div>
          </div>
          <div className="btn mt-2 w-[100%] bg-transparent flex items-center">
            <button className="px-4 py-2 mx-auto rounded-xl text-center text-xl bg-black border border-black text-white hover:text-black hover:bg-white hover:font-bold hover:shadow-xl">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditTask;
