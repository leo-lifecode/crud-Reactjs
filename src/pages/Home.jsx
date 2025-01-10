import React from "react";
import Navbar from "../components/navbar";
import Pagination from "../components/pagination";
const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center border rounded-lg overflow-hidden">
            <input
              type="text"
              placeholder="Search name here..."
              className="p-2 outline-none"
            />
            <button className="bg-blue-600 text-white p-2">Submit</button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border rounded-lg">
            <thead>
              <tr className="border-b">
                <th className="p-2 text-left">
                  Name/ID
                </th>
                <th className="p-2 text-left">
                  Position
                </th>
                <th className="p-2 text-left">
                  Email/Phone
                </th>
                <th className="p-2 text-left">
                  Action
                </th>
                <th className="p-2 text-left"></th>
              </tr>
            </thead>
            <tbody>
              {Array(4)
                .fill()
                .map((_, index) => (
                  <tr key={index} className="border-b">
                    <td className="p-2 text-blue-600">
                      Andrio Maksim
                    </td>
                    <td className="p-2">
                      Designer
                    </td>
                    <td className="p-2">
                      maksim45@gmail.com
                    </td>
                    <td className="p-2 space-x-3">
                      <a href="" className="rounded-xl font-medium text-sm shadow-md px-2 py-1 bg-yellow-300">Edit</a>
                      <a href="" className="rounded-xl font-medium text-sm shadow-md px-2 py-1 bg-red-600">Delete</a>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
          <div className="mx-auto w-full">
            <Pagination />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
