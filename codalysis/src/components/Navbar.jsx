import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!isOpen);
  };

  return (
    <nav className="bg-black p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo/Brand Name */}
        <Link
          to="/"
          className="text-white text-2xl  hover:text-slate-500 font-bold transition duration-300"
        >
          Codalysis
        </Link>
        <div className="hidden md:flex space-x-6">
          <Link
            to="/analyze"
            className="text-white hover:text-slate-500 transition duration-300 mr-6"
          >
            Analyze
          </Link>
          <Link
            to="/examples"
            className="text-white hover:text-slate-500 transition duration-300"
          >
            Examples
          </Link>
        </div>

        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            )}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden mt-2 space-y-2 px-2">
          <Link
            to="/"
            className="block text-white hover:text-slate-500 transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/analyze"
            className="block text-white hover:text-slate-500 transition duration-300"
          >
            Analyse
          </Link>
          <Link
            to="/examples"
            className="block text-white hover:text-slate-500 transition duration-300"
          >
            Examples
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
