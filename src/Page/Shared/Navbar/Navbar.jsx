// import React from "react";
// import Logo from "../../../Components/Logo/Logo";
// import { NavLink } from "react-router";

// const Navbar = () => {
//   const links = (
//     <>
//       <li>
//         <NavLink to="/">Home</NavLink>
//       </li>
//       <li>
//         <NavLink to="/allbooks">All Books</NavLink>
//       </li>

//       <li>
//         <a>Item 3</a>
//       </li>
//     </>
//   );
//   return (
//     <div className="max-w-7xl mx-auto w-full flex-1">
//       <div className="navbar bg-base-100 shadow-sm">
//         <div className="navbar-start">
//           <div className="dropdown">
//             <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-5 w-5"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 {" "}
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M4 6h16M4 12h8m-8 6h16"
//                 />{" "}
//               </svg>
//             </div>
//             <ul
//               tabIndex="-1"
//               className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
//             >
//               {links}
//             </ul>
//           </div>
//           <Logo></Logo>
//         </div>
//         <div className="navbar-center hidden lg:flex">
//           <ul className="menu menu-horizontal px-1">{links}</ul>
//         </div>
//         <div className="navbar-end">
//           <a className="btn">Button</a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;


import React  from "react";

import { Link, NavLink, useNavigate } from "react-router";

// import ThemeToggle from "../ThemeToggle/ThemeToggle";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import useAuth from "../../../hooks/useAuth";

const Navbar = () => {
  const { user, signOutUser, loading } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        // toast.success("Logged out successfully!");
        navigate("/");
      })
    //   .catch((err) => toast.error(err.message));
  };

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `px-2 py-1 ${
              isActive ? "text-blue-600 font-bold" : "hover:text-blue-600"
            }`
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/all-books"
          className={({ isActive }) =>
            `px-2 py-1 ${
              isActive ? "text-blue-600 font-bold" : "hover:text-blue-600"
            }`
          }
        >
          All Books
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/add-a-book"
          className={({ isActive }) =>
            `px-2 py-1 ${
              isActive ? "text-blue-600 font-bold" : "hover:text-blue-600"
            }`
          }
        >
          Add A Book
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/my-books"
          className={({ isActive }) =>
            `px-2 py-1 ${
              isActive ? "text-blue-600 font-bold" : "hover:text-blue-600"
            }`
          }
        >
          My Books
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm md:px-4 lg:px-16 py-2 flex justify-between items-center mx-auto max-w-7xl">
      {/* Navbar Start */}
      <div className="navbar-start flex items-center">
        {/* Mobile Dropdown */}
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>

          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 space-y-2"
          >
            {links}

            {user ? (
              <>
                {/* Profile Avatar */}
                {/* <div className="relative group flex items-center">
                  <img
                    src={
                      user?.photoURL ||
                      "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
                    }
                    alt="avatar"
                    className="w-10 h-10 rounded-full border cursor-pointer md:hidden"
                  />
                  <p className="text-xs font-bold px-2 py-1">
                    {user?.displayName || "User"}
                  </p>
                </div> */}

                <div className="relative group hidden md:block">
                  <img
                    src={
                      user?.photoURL ||
                      "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
                    }
                    alt="avatar"
                    className="mr-1 w-10 h-10 rounded-full border cursor-pointer"
                    data-tooltip-id="avatar-tooltip"
                    data-tooltip-content={user?.displayName || "User"}
                    data-tooltip-place="bottom"
                  />
                </div>

                {/* Logout Button */}
                <button
                  onClick={handleSignOut}
                  className="btn btn-sm bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-md"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <NavLink
                  to="/login"
                  className="btn btn-sm bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-md md:hidden"
                >
                  Login
                </NavLink>
                <NavLink
                  to="/register"
                  className="btn btn-sm bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-md md:hidden"
                >
                  Register
                </NavLink>
              </>
            )}
          </ul>
        </div>

        {/* Logo */}
        <Link to="/" className="ml-2 hidden md:flex">
          <img
            src="/logo.png"
            alt="Logo"
            className="w-[60px] md:w-[100px] h-[30px] md:h-[50px]"
          />
        </Link>
      </div>

      {/* Navbar Center */}
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal px-0 lg:px-1 text-sm lg:text-lg font-semibold">
          {links}
        </ul>
      </div>

      {/* Mobile Logo */}
      <Link to="/" className="flex md:hidden">
        <img src="/logo.png" alt="Logo" className="w-[100px]" />
      </Link>

      {/* Navbar End */}
      <div className="navbar-end  items-center  space-x-2 md:space-x-3">
        {/* <ThemeToggle /> */}

        {loading ? (
          <div className="items-center space-x-2 hidden md:flex">
            <div className="skeleton w-8 h-8 rounded-full"></div>
            <div className="skeleton w-16 h-4 rounded"></div>
          </div>
        ) : user ? (
          <>
            {/* Profile Avatar */}

            <div className="relative group hidden md:block">
              <img
                src={
                  user?.photoURL ||
                  "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
                }
                alt="avatar"
                className="mr-1 w-10 h-10 rounded-full border cursor-pointer z-50"
                data-tooltip-id="avatar-tooltip"
                data-tooltip-content={user?.displayName || "User"}
                data-tooltip-place="bottom"
              />
              {/* Render Tooltip Component */}
             <Tooltip id="avatar-tooltip" className="z-20" />

            </div>

            {/* Logout Button */}
            <button
              onClick={handleSignOut}
              className="btn btn-sm bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-md hidden md:block"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <NavLink
              to="/login"
              className="btn btn-sm bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-md hidden md:flex"
            >
              Login
            </NavLink>
            <NavLink
              to="/register"
              className="btn btn-sm bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-md hidden md:flex"
            >
              Register
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;