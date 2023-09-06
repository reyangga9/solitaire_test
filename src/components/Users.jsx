import React from "react";
import { useNavigate } from "react-router-dom";

const Users = ({ users }) => {
  const navigate = useNavigate();
  return (
    <main className="mt-20">
      <div className="max-w-4xl mx-auto grid grid-cols-3 gap-4">
        {users.data?.map((user) => (
          <div
            key={user.id}
            class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <div class="flex flex-col items-center pb-10 mt-4">
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
              <div class="flex mt-4 space-x-3 md:mt-6">
                <button
                  href="#"
                  class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  onClick={() => {
                    console.log(user.id);
                    navigate(`/${user.id}`);
                  }}
                >
                  Detail user
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Users;
