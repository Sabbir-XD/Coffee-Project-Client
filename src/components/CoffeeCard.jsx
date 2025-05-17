import React from "react";
import { FaRegEye } from "react-icons/fa";
import { MdDelete, MdEdit } from "react-icons/md";
import { Link } from "react-router";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, setCoffees, coffees }) => {
  const { _id, name, barista, price, photo } = coffee;

  // Function to handle coffee deletion
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
      console.log(result.isConfirmed);
      if (result.isConfirmed) {
        // Delete the coffee from the server
        fetch(`http://localhost:3000/coffees/${_id}`, {
          method: "DELETE",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ _id }),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("deleted successfully", data);
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              // Update the state to remove the deleted coffee
              const remainingCoffees = coffees.filter((cof) => cof._id !== _id);
              setCoffees(remainingCoffees);
            }
          });
      }
    });
  };

  return (
    <div className="w-full mx-auto bg-base-300 rounded-2xl">
      <div className="grid grid-cols-12 items-center p-4">
        {/* Image Section */}
        <div className="grid col-span-4">
          <img
            src={photo}
            alt={name}
            className="md:w-[180px] md:h-[200px] object-contain transition-transform transform hover:scale-105"
          />
        </div>

        {/* Content Section */}

        {/* Title with decorative elements */}
        <div className="col-span-4 mb-3">
          <p className="md:text-md font-medium text-gray-500">
            <span className="font-bold text-gray-700 md:text-lg">Name: </span>
            {name}
          </p>
          <p className="md:text-md font-medium text-gray-500">
            <span className="font-bold text-gray-700 md:text-lg">
              barista:{" "}
            </span>
            {barista}
          </p>
          <p className="md:text-md font-medium text-gray-500">
            <span className="font-bold text-gray-700 md:text-lg">price: </span>$
            {price}
          </p>
        </div>

        {/* icons */}
        <div className="col-span-4 space-y-2">
          <Link to={`/coffees/${_id}`} className="w-10 h-10 mx-auto flex justify-center items-center rounded-md bg-[#D2B48C] text-white">
            <FaRegEye className="" />
          </Link>
          <Link
            to={`/updateCoffee/${_id}`}
            className=" w-10 h-10 mx-auto flex justify-center items-center rounded-md bg-[#3C393B] text-white"
          >
            <MdEdit />
          </Link>
          <div
            onClick={() => handleDelete(_id)}
            className="w-10 h-10 mx-auto flex justify-center items-center rounded-md bg-[#EA4744] text-white"
          >
            <MdDelete />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
