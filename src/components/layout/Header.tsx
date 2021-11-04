import { MdHome, MdOutlineAddCircle } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo-white.png";

const Header = () => {
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  return (
    <nav className="flex flex-col sm:flex-row items-center justify-between flex-wrap bg-black px-6 py-3">
      <div className="flex items-center flex-no-shrink text-white mr-6 mb-6 sm:mb-0">
        <img src={logo} alt="Magnesie V2 logo" className="mr-6 w-12 h-12" />
        <span className="font-semibold text-2xl tracking-tight">
          Magnesie V2
        </span>
      </div>
      <Link
        to={isHome ? "/new-modelization" : "/"}
        className="bg-white hover:bg-gray-200 text-black font-bold py-2 px-4 rounded inline-flex items-center"
      >
        {isHome ? (
          <MdOutlineAddCircle className="mr-3" size="26" />
        ) : (
          <MdHome className="mr-3" size="26" />
        )}
        <p>{isHome ? "Nouvelle modélisation" : "Accueil"}</p>
      </Link>
    </nav>
  );
};

export default Header;
