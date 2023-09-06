import React, { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import Users from "../components/Users";

const Home = () => {
  const [users, setUsers] = useState([]);
  let [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    let fetchUsers = async () => {
      let response = await fetch(
        `https://reqres.in/api/users?page=${pageNumber}`
      );
      let data = await response.json();

      setUsers(data);
    };
    fetchUsers();
  }, [pageNumber]);

  return (
    <div>
      <Navbar />
      <Users users={users} />

      <footer className="flex items-center justify-center mt-20 gap-16">
        <button
          onClick={() => {
            setPageNumber(1);
          }}
          type="button"
          class="text-white w-24 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Page 1
        </button>
        <button
          type="button"
          onClick={() => {
            setPageNumber(2);
          }}
          class="text-white w-24 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Page 2
        </button>
      </footer>
    </div>
  );
};

export default Home;
