import React from "react";
import Swal from "sweetalert2";

const AddCoffee = () => {
  // Function to handle form submission
  const handleAddCoffee = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    const form = event.target;
    const formData = new FormData(form);
    const coffeeData = Object.fromEntries(formData.entries());

    // Example: Send coffeeData to your server or API
    fetch("https://coffee-project-server-nu.vercel.app/coffees", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(coffeeData),
    })
      .then((res) => res.json())
      .then((data) => {
        if(data.insertedId){
            Swal.fire({
                title: "Coffee Added Successfully!",
                icon: "success",
                draggable: true,
                timer: 2000,
              });
            form.reset();
        }
      });
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-base-300 rounded-xl shadow-lg mt-10 mb-12 border border-base-200">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-3">Add New Coffee</h1>
        <div className="w-20 h-1 bg-[#D2B48C] mx-auto mb-4"></div>
        <p className="text-gray-500 max-w-2xl mx-auto">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters.
        </p>
      </div>

      <form onSubmit={handleAddCoffee} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium text-gray-700">
                Coffee Name
              </span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="e.g. Ethiopian Yirgacheffe"
              className="input input-bordered w-full focus:ring-1  focus:border-transparent"
            />
          </div>

          {/* Chef */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium text-gray-700">
                Barista/Specialist
              </span>
            </label>
            <input
              type="text"
              name="barista"
              placeholder="e.g. Master Roaster John"
              className="input input-bordered w-full focus:ring-1  focus:border-transparent"
            />
          </div>

          {/* Supplier */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium text-gray-700">
                Supplier
              </span>
            </label>
            <div className="relative">
              <input
                type="text"
                name="supplier"
                placeholder="e.g. Blue Mountain Imports"
                className="input input-bordered w-full focus:ring-1  focus:border-transparent"
              />
            </div>
          </div>

          {/* Price */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium text-gray-700">
                Price ($)
              </span>
            </label>
            <div className="relative">
              <span className="absolute left-3 top-3 text-gray-400">$</span>
              <input
                type="number"
                name="price"
                placeholder="12.99"
                className="input input-bordered w-full pl-8 focus:ring-1  focus:border-transparent"
              />
            </div>
          </div>

          {/* Category */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium text-gray-700">
                Category
              </span>
            </label>
            <select
              className="select select-bordered w-full focus:ring-1  focus:border-transparent"
              defaultValue=""
              name="category"
            >
              <option disabled value="Select category">
                Select category
              </option>
              <option value="Single Origin">Single Origin</option>
              <option value="Blend">Blend</option>
              <option value="Espresso">Espresso</option>
              <option value="Decaf">Decaf</option>
              <option value="Specialty">Specialty</option>
            </select>
          </div>

          {/* Details */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium text-gray-700">
                Details
              </span>
            </label>
            <input
              type="text"
              name="details"
              placeholder="e.g. Floral notes with citrus finish"
              className="input input-bordered w-full focus:ring-1  focus:border-transparent"
            />
          </div>
        </div>

        {/* Photo URL */}
        <div className="form-control">
          <label className="label">
            <span className="label-text font-medium text-gray-700">
              Photo URL
            </span>
          </label>

          <input
            type="url"
            name="photo"
            placeholder="https://example.com/coffee.jpg"
            className="input input-bordered w-full focus:ring-1  focus:border-transparent"
          />
        </div>

        {/* Add Button */}
        <div className="pt-6">
          <button className="btn bg-[#D2B48C] w-full py-3 text-lg font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
            Add Coffee
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCoffee;
