import { NavLink } from "react-router";

const NavBar = () => {
  return (
    <nav className="p-7 w-full flex justify-center space-x-4">
      <NavLink
        to="/"
        className="text-white hover:text-blue-700 font-semibold"
        end
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className="text-white hover:text-blue-700 font-semibold"
        end
      >
        About
      </NavLink>
      <NavLink
        to="/configure"
        className="text-white hover:text-blue-700 font-semibold"
        end
      >
        Configure
      </NavLink>
    </nav>
  );
};

export default NavBar;
