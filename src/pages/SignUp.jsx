import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import {
  FaUser,
  FaLock,
  FaCamera,
  FaPhone,
  FaMapMarkerAlt,
  FaBirthdayCake,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { AuthContext } from "../Context/AuthContext";
import Swal from "sweetalert2";

const SignUp = () => {
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { handleCreateUser } = useContext(AuthContext);

  // Validate form data
  const validateForm = (formData = {}) => {
    const newErrors = {};

    // Name validation
    if (!formData.name?.trim()) {
      newErrors.name = "Name is required";
    }

    // // Password validation
    // if (!formData.password?.trim()) {
    //   newErrors.password = "Password is required";
    // } else if (formData.password.length < 6) {
    //   newErrors.password = "Password must be at least 6 characters long";
    // } else if (!/[A-Z]/.test(formData.password)) {
    //   newErrors.password =
    //     "Password must contain at least one uppercase letter";
    // } else if (!/\d/.test(formData.password)) {
    //   newErrors.password = "Password must contain at least one number";
    // } else if (!/[!@#$%^&*]/.test(formData.password)) {
    //   newErrors.password =
    //     "Password must contain at least one special character";
    // }

    // Phone validation
    if (!formData.phone?.match(/^[0-9]{10,15}$/)) {
      newErrors.phone = "Invalid phone number (10-15 digits)";
    }

    // Birth date validation
    if (!formData.birthDate) {
      newErrors.birthDate = "Birth date is required";
    } else {
      const birthDate = new Date(formData.birthDate);
      const minAgeDate = new Date();
      minAgeDate.setFullYear(minAgeDate.getFullYear() - 13);
      if (birthDate > minAgeDate) {
        newErrors.birthDate = "You must be at least 13 years old";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const { email, password, ...data } = Object.fromEntries(formData.entries());

    if (validateForm(data)) {
      handleCreateUser(email, password)
        .then((result) => {
          // console.log("User created:", result.user);

          const UserDetails = {
            email,
            ...data,
            creationTime: result.user?.metadata?.creationTime,
            lastSignInTime: result.user?.metadata?.lastSignInTime,
          };

          //data set a DB
          fetch("https://coffee-project-server-nu.vercel.app/users", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(UserDetails),
          })
            .then((res) => res.json())
            .then((users) => {
              // console.log("User data saved:", users);
              if (users.insertedId) {
                // alert("User created successfully");
                Swal.fire({
                  title: "Account was created!",
                  icon: "success",
                  draggable: true,
                  timer: 2000,
                });
              }
            });

          navigate("/");
        })
        .catch((error) => {
          // console.error("Error creating user:", error);
          setErrors((prev) => ({
            ...prev,
            form:
              error.message || "Failed to create account. Please try again.",
          }));
        });
    }
  };


  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f5f5f5] to-[#e0e0e0] flex items-center justify-center p-4">
      <div className="bg-white p-6 sm:p-8 rounded-xl shadow-xl w-full max-w-2xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-[#3e2723] mb-2">
            Join Our Coffee Community
          </h2>
          <p className="text-[#6d4c41]">
            Create your account to explore the world of coffee
          </p>
        </div>

        {errors.form && (
          <div className="mb-6 p-3 bg-red-100 text-red-700 rounded-lg text-center">
            {errors.form}
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Left Column */}
          <div className="space-y-4">
            {/* Full Name */}
            <InputField
              label="Full Name *"
              name="name"
              type="text"
              placeholder="John Doe"
              icon={<FaUser className="text-[#8d6e63]" />}
              error={errors.name}
            />

            {/* Email */}
            <InputField
              label="Email *"
              name="email"
              type="email"
              placeholder="john@example.com"
              icon={<MdEmail className="text-[#8d6e63]" />}
              error={errors.email}
            />

            {/* Password */}
            <div className="relative">
              <label className="block text-sm font-medium text-[#6d4c41] mb-1">
                Password *
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaLock className="text-[#8d6e63]" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="••••••••"
                  className={`w-full pl-10 pr-10 py-2 bg-[#efebe9] border ${
                    errors.password ? "border-red-500" : "border-[#d7ccc8]"
                  } rounded-lg text-[#3e2723] focus:outline-none focus:ring-2 focus:ring-[#8d6e63]`}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  <FaLock
                    className={`text-[#8d6e63] text-sm ${
                      showPassword ? "opacity-50" : ""
                    }`}
                  />
                </button>
              </div>
              {errors.password && (
                <p className="text-red-500 text-xs mt-1">{errors.password}</p>
              )}
              <div className="text-xs text-[#6d4c41] mt-1">
                Password must contain:
                <ul className="list-disc list-inside">
                  <li
                    className={
                      errors.password?.includes("6 characters")
                        ? "text-red-500"
                        : "text-[#6d4c41]"
                    }
                  >
                    6+ characters
                  </li>
                  <li
                    className={
                      errors.password?.includes("uppercase")
                        ? "text-red-500"
                        : "text-[#6d4c41]"
                    }
                  >
                    1 uppercase letter
                  </li>
                  <li
                    className={
                      errors.password?.includes("number")
                        ? "text-red-500"
                        : "text-[#6d4c41]"
                    }
                  >
                    1 number
                  </li>
                  <li
                    className={
                      errors.password?.includes("special")
                        ? "text-red-500"
                        : "text-[#6d4c41]"
                    }
                  >
                    1 special character
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            {/* Profile Photo URL */}
            <InputField
              label="Profile Photo URL"
              name="photoUrl"
              type="url"
              placeholder="https://example.com/photo.jpg"
              icon={<FaCamera className="text-[#8d6e63]" />}
            />

            {/* Phone Number */}
            <InputField
              label="Phone Number *"
              name="phone"
              type="tel"
              placeholder="1234567890"
              icon={<FaPhone className="text-[#8d6e63]" />}
              error={errors.phone}
            />

            {/* Address */}
            <InputField
              label="Address"
              name="address"
              type="text"
              placeholder="123 Coffee St, City"
              icon={<FaMapMarkerAlt className="text-[#8d6e63]" />}
            />

            {/* Birth Date */}
            <InputField
              label="Birth Date *"
              name="birthDate"
              type="date"
              icon={<FaBirthdayCake className="text-[#8d6e63]" />}
              error={errors.birthDate}
              max={
                new Date(new Date().setFullYear(new Date().getFullYear() - 13))
                  .toISOString()
                  .split("T")[0]
              }
            />

            {/* Coffee Preference */}
            <div>
              <label className="block text-sm font-medium text-[#6d4c41] mb-1">
                Coffee Preference
              </label>
              <select
                name="coffeePreference"
                className="w-full px-4 py-2 bg-[#efebe9] border border-[#d7ccc8] rounded-lg text-[#3e2723] focus:outline-none focus:ring-2 focus:ring-[#8d6e63]"
              >
                <option value="">Select your favorite</option>
                <option value="espresso">Espresso</option>
                <option value="latte">Latte</option>
                <option value="cappuccino">Cappuccino</option>
                <option value="americano">Americano</option>
                <option value="coldbrew">Cold Brew</option>
              </select>
            </div>
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full py-3 px-4 bg-gradient-to-r from-[#6d4c41] to-[#4e342e] text-white font-medium rounded-lg hover:from-[#4e342e] hover:to-[#3e2723] transition-all duration-300 shadow-md hover:shadow-lg active:scale-95 text-lg"
            >
              Create Account
            </button>
          </div>

          <div className="md:col-span-2 text-center">
            <p className="text-[#6d4c41]">
              Already have an account?{" "}
              <Link
                to="/signin"
                className="text-[#3e2723] hover:text-[#1b0000] font-medium underline transition-colors"
              >
                Sign In
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

// Reusable input component
const InputField = ({ label, name, type, placeholder, icon, error, max }) => (
  <div className="relative">
    <label className="block text-sm font-medium text-[#6d4c41] mb-1">
      {label}
    </label>
    <div className="relative">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        {icon}
      </div>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className={`w-full pl-10 pr-4 py-2 bg-[#efebe9] border ${
          error ? "border-red-500" : "border-[#d7ccc8]"
        } rounded-lg text-[#3e2723] focus:outline-none focus:ring-2 focus:ring-[#8d6e63]`}
        max={max}
      />
    </div>
    {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
  </div>
);

export default SignUp;
