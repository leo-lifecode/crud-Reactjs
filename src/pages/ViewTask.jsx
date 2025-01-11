import { useSearchParams } from "react-router-dom";

const ViewTask = ({ tasks}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const task = tasks.find((task) => task.id ===  parseInt(searchParams.get("id")));

  return (
    <div className="bg-gray-100 dark:bg-slate-800 dark:text-white min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-8">View Task</h1>
        <div className="bg-white shadow-lg rounded-lg p-8">
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-lg font-medium text-gray-700">
                <span className="text-xl font-semibold text-gray-900">Title:</span> {task.title}
              </div>
              <div className="text-lg font-medium text-gray-700">
                <span className="text-xl font-semibold text-gray-900">Category:</span> {task.category}
              </div>
            </div>

            <div className="mt-4">
              <label className="text-xl font-semibold text-gray-900">Description:</label>
              <p className="mt-2 text-lg text-gray-700">{task.description}</p>
            </div>
          </div>

          <div className="mt-8">
            <a
              href="/"
              className="w-full inline-block text-center py-3 px-6 rounded-lg text-xl font-semibold text-white bg-black border border-transparent hover:bg-white hover:text-black hover:border-black transition duration-300 ease-in-out transform hover:scale-105"
            >
              Back To Home
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewTask;
