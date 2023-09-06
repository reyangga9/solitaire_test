import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";

const Users = () => {
  let { userId } = useParams();
  const [user, setUser] = useState([]);

  useEffect(() => {
    let fetchUsers = async () => {
      let response = await fetch(`https://reqres.in/api/users/${userId}`);
      let data = await response.json();

      setUser(data.data);
    };
    fetchUsers();
  }, [userId]);
  console.log(user);

  return (
    <div>
      <Navbar />
      <main className="mt-20">
        <div className="flex justify-center">
          <div
            key={user.id}
            class=" max-w-sm w-96 h-96 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <div class="flex flex-col items-center pb-10 mt-4 ">
              <img
                class="w-24 h-24 mb-3 rounded-full shadow-lg"
                src={user.avatar}
                alt="Bonnie"
              />
              <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                {user.first_name} {user.last_name}
              </h5>
              <span class="text-sm text-gray-500 dark:text-gray-400">
                {user.email}
              </span>
              <span className="mt-8 p-8">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id
                odio tempore vitae libero rerum incidunt nemo voluptatibus sed
                officiis dignissimos!
              </span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Users;
