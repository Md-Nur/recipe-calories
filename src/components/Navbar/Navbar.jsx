import NavItems from "./NavItems";
import { IoMenu } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <nav className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <IoMenu className="h-5 w-5" />
          </div>
          <NavItems myClasses="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52" />
        </div>
        <a className="btn btn-ghost text-xl">Recipe Calories</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <NavItems myClasses="menu menu-horizontal px-1" />
      </div>
      <div className="navbar-end space-x-2">
        <div className="form-control bg-gray-300 w-24 md:w-auto rounded-3xl md:flex flex-row items-center justify-center gap-3 input hidden">
          <IoSearchOutline className="w-5 h-5" />
          <input type="text" placeholder="Search" className="text-black" />
        </div>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Avatar"
                src="./src/assets/avatar.png"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
