import React, { useState } from "react";
import { useLoaderData } from "react-router";
import {
  FaUser,
  FaPhone,
  FaMapMarkerAlt,
  FaBirthdayCake,
  FaCoffee,
  FaInfoCircle,
  FaEdit,
  FaTrash,
} from "react-icons/fa";
import Swal from "sweetalert2";

const AllUsers = () => {
  const initialData = useLoaderData();
  const [userDB, setUserDB] = useState(initialData);
  const [activeTooltip, setActiveTooltip] = useState(null);

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // Delete the user from the server
        fetch(`https://coffee-project-server-nu.vercel.app/users/${_id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id: _id }),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("User deleted:", data);
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your user has been deleted.",
                icon: "success",
              });
              setUserDB(userDB.filter((user) => user._id !== _id));
            }
          });
      }
    });
  };

  return (
    <div className="min-h-screen bg-[#f5f0e8] p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-[#3e2723] mb-8 flex items-center justify-center">
          <FaCoffee className="mr-3 text-[#6d4c41]" />
          <span className="border-b-2 border-[#8d6e63] pb-1">Members</span>
        </h1>

        <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-[#e0d5d0]">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-[#e0d5d0]">
              <thead className="bg-[#f5f0e8]">
                <tr>
                  <th className="px-6 py-5 text-left text-sm font-medium text-[#6d4c41] tracking-wider">
                    <div className="flex items-center">
                      <FaUser className="mr-2" /> Profile
                    </div>
                  </th>
                  <th className="px-6 py-5 text-left text-sm font-medium text-[#6d4c41] tracking-wider">
                    <FaPhone className="inline mr-2" />
                    <FaMapMarkerAlt className="inline" />
                  </th>
                  <th className="px-6 py-5 text-left text-sm font-medium text-[#6d4c41] tracking-wider">
                    <FaBirthdayCake className="inline mr-2" />
                    <FaCoffee className="inline" />
                  </th>
                  <th className="px-6 py-5 text-left text-sm font-medium text-[#6d4c41] tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-[#e0d5d0]">
                {userDB.map((userData) => (
                  <tr
                    key={userData._id}
                    className="hover:bg-[#faf5f0] transition-colors"
                  >
                    {/* Profile Column */}
                    <td className="px-6 py-5 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-12 w-12 rounded-full overflow-hidden border-2 border-[#d7ccc8]">
                          <img
                            className="h-full w-full object-cover"
                            src={userData.photoUrl}
                            alt="User profile"
                          />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-[#3e2723]">
                            {userData.name}
                          </div>
                          <div className="text-xs text-[#8d6e63]">
                            {userData.email}
                          </div>
                        </div>
                      </div>
                    </td>

                    {/* Contact Column */}
                    <td className="px-6 py-5 whitespace-nowrap">
                      <div className="flex flex-col space-y-2">
                        <div className="flex items-center text-[#6d4c41]">
                          <FaPhone className="mr-2" />
                          <span className="text-sm">{userData.phone}</span>
                        </div>
                        <div className="flex items-center text-[#6d4c41]">
                          <FaMapMarkerAlt className="mr-2" />
                          <span className="text-xs">{userData.address}</span>
                        </div>
                      </div>
                    </td>

                    {/* Details Column */}
                    <td className="px-6 py-5 whitespace-nowrap">
                      <div className="flex flex-col space-y-2">
                        <div className="flex items-center text-[#6d4c41]">
                          <FaBirthdayCake className="mr-2" />
                          <span className="text-sm">{userData.birthDate}</span>
                        </div>
                        <div className="flex items-center">
                          <FaCoffee className="mr-2 text-[#6d4c41]" />
                          <span className="text-xs px-2 py-1 rounded-full bg-[#f5f0e8] text-[#6d4c41]">
                            {userData.coffeePreference}
                          </span>
                        </div>
                      </div>
                    </td>

                    {/* Actions Column */}
                    <td className="px-6 py-5 whitespace-nowrap">
                      <div className="flex space-x-3">
                        <button
                          className="p-2 rounded-full bg-[#f5f0e8] text-[#6d4c41] hover:bg-[#8d6e63] hover:text-white transition-colors relative"
                          onMouseEnter={() =>
                            setActiveTooltip(`${userData._id}-details`)
                          }
                          onMouseLeave={() => setActiveTooltip(null)}
                        >
                          <FaInfoCircle />
                          {activeTooltip === `${userData._id}-details` && (
                            <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-[#3e2723] text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                              Details
                            </span>
                          )}
                        </button>
                        <button
                          className="p-2 rounded-full bg-[#f5f0e8] text-[#6d4c41] hover:bg-[#8d6e63] hover:text-white transition-colors relative"
                          onMouseEnter={() =>
                            setActiveTooltip(`${userData._id}-edit`)
                          }
                          onMouseLeave={() => setActiveTooltip(null)}
                        >
                          <FaEdit />
                          {activeTooltip === `${userData._id}-edit` && (
                            <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-[#3e2723] text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                              Edit
                            </span>
                          )}
                        </button>
                        <button
                          onClick={() => handleDelete(userData._id)}
                          className="p-2 rounded-full bg-[#f5f0e8] text-[#6d4c41] hover:bg-[#bf360c] hover:text-white transition-colors relative"
                        >
                          <FaTrash />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Footer */}
          <div className="bg-[#f5f0e8] px-6 py-3 flex items-center justify-between border-t border-[#e0d5d0]">
            <div className="text-xs text-[#8d6e63]">
              {userDB.length} members
            </div>
            <div className="flex space-x-2">
              <button className="p-2 rounded-full bg-white text-[#6d4c41] border border-[#d7ccc8] hover:bg-[#d7ccc8]">
                &lt;
              </button>
              <button className="p-2 rounded-full bg-white text-[#6d4c41] border border-[#d7ccc8] hover:bg-[#d7ccc8]">
                &gt;
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
