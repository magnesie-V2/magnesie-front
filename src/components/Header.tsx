import { Link } from "react-router-dom";

const Header = () => (
  <div className="bg-green-300 border-green-600 border-b p-4 rounded flex flex-col">
    <Link to="/">Home</Link>
    <Link to="/new-modelization">New modelization</Link>
  </div>
);

export default Header;
