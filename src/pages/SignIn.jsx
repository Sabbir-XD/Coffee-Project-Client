import { Link, useNavigate } from "react-router";
import { FaUser, FaLock, FaGoogle, FaGithub, FaArrowLeft } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

const SignIn = () => {
  const navigate = useNavigate();
  const {handleLoginUser,setUser} = useContext(AuthContext);
  

    // Handle login logic
    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
    
        handleLoginUser(email, password)
        .then((result) => {
            // console.log(result.user);
            setUser(result.user);
            navigate("/");
        })
        .catch((error) => {
            console.error(error.message);
        });
    };


  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f8f4e8] to-[#e8e0d0] flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md border border-[#d7ccc8] relative">
        <button 
          onClick={() => navigate(-1)}
          className="absolute top-6 left-6 text-[#6d4c41] hover:text-[#3e2723] flex items-center"
        >
          <FaArrowLeft className="mr-1" /> Back
        </button>

        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-[#efebe9] border border-[#d7ccc8] rounded-full flex items-center justify-center mx-auto mb-4">
            <FaUser className="text-[#6d4c41] text-3xl" />
          </div>
          <h2 className="text-3xl font-bold text-[#3e2723] mb-2">
            Welcome Back
          </h2>
          <p className="text-[#8d6e63]">
            Sign in to continue
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <MdEmail className="text-[#6d4c41]" />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="w-full pl-10 pr-4 py-3 bg-[#efebe9] border border-[#d7ccc8] rounded-lg text-[#3e2723] placeholder-[#8d6e63] focus:outline-none focus:ring-2 focus:ring-[#a1887f]"
              required
            />
          </div>

          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaLock className="text-[#6d4c41]" />
            </div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="w-full pl-10 pr-4 py-3 bg-[#efebe9] border border-[#d7ccc8] rounded-lg text-[#3e2723] placeholder-[#8d6e63] focus:outline-none focus:ring-2 focus:ring-[#a1887f]"
              required
            />
          </div>

          <div className="flex justify-between items-center">
            <label className="flex items-center">
              <input 
                type="checkbox" 
                className="form-checkbox text-[#6d4c41] bg-[#efebe9] border-[#d7ccc8] rounded focus:ring-[#a1887f]" 
              />
              <span className="ml-2 text-[#6d4c41] text-sm">Remember me</span>
            </label>
            <Link to="/forgot-password" className="text-sm text-[#8d6e63] hover:text-[#6d4c41]">
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 bg-gradient-to-r from-[#8d6e63] to-[#6d4c41] text-white font-medium rounded-lg hover:from-[#6d4c41] hover:to-[#4e342e] transition-all duration-300 shadow-md text-lg"
          >
            Sign In
          </button>
        </form>

        <div className="mt-8">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-[#d7ccc8]"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="px-3 bg-white text-sm text-[#8d6e63]">
                Or continue with
              </span>
            </div>
          </div>

          <div className="flex justify-center gap-6 mt-6">
            <button className="p-3 bg-[#efebe9] rounded-full border border-[#d7ccc8] text-[#6d4c41] hover:bg-[#d7ccc8] hover:text-[#3e2723] transition-colors">
              <FaGoogle size={22} />
            </button>
            <button className="p-3 bg-[#efebe9] rounded-full border border-[#d7ccc8] text-[#6d4c41] hover:bg-[#d7ccc8] hover:text-[#3e2723] transition-colors">
              <FaGithub size={22} />
            </button>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-[#8d6e63]">
            Don't have an account?
            <Link 
              to="/signup"
              className="ml-2 text-[#6d4c41] hover:text-[#3e2723] font-medium underline"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;