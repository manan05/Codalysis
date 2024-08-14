import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 shadow-lg">
      <div className="container mx-auto flex">
        <div className="container mx-auto flex">
          {/* Logo/Brand Name */}
          <Link to="/" className="text-white text-2xl  hover:text-blue-200 font-bold transition duration-300">
            Codalysis
          </Link>
        </div>
        <div className="container mx-auto flex justify-end">
          <Link
            to="/analyze"
            className="text-white hover:text-blue-200 transition duration-300 mr-6"
          >
            Analyse
          </Link>
          <Link
            to="/examples"
            className="text-white hover:text-blue-200 transition duration-300"
          >
            Examples
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
