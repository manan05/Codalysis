import { Link } from "react-router-dom";

const TryOutButton = () => {
  return (
    <>
      <div className="flex justify-center items-center m-11">
        <Link to="/analyse" className="px-6 py-2 bg-black text-white text-2xl  hover:text-slate-500 font-bold transition duration-300 rounded">
          Analyse
        </Link>
      </div>
    </>
  );
};

export default TryOutButton;
