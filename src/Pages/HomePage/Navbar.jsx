import { useContext, useState } from "react";
import { BsMoonStars } from "react-icons/Bs";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { Dropdown } from "flowbite-react";

const navbar = () => {
  const [error, setError] = useState("");
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignOut = () => {
    logOut()
      .then((result) => {
        navigate("/");
      })
      .catch((error) => {
        setError(error.massage);
      });
  };

  const navLink = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-white font-DM underline"
              : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/foodItems"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-white font-DM underline"
              : ""
          }
        >
          Food Items
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/blog"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-white font-DM underline"
              : ""
          }
        >
          Blog
        </NavLink>
      </li>
    </>
  );

  return (
    <div>
      <nav className="bg-black font-DM border-gray-200 dark:bg-gray-900 ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="flex items-center">
            <BsMoonStars className="text-xl mr-3 text-white"></BsMoonStars>
            <span className="self-center text-xl font-semibold whitespace-nowrap text-white">
              MSR
            </span>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 "
            id="navbar-user"
          >
            <ul className="flex flex-col font-medium uppercase p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-black text-white md:flex-row md:space-x-8 md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              {navLink}
            </ul>
          </div>
          <div className="flex md:order-2">
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="
              inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="false"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
           </button>
           <div className="mr-3 mt-1">
            <img
              className="w-8 h-8 rounded-full"
              src={user?.photoURL}
              alt="user photo"
            ></img>
           </div>
            <Dropdown label="Profile">
              <Link to="/addedFoods">
                <Dropdown.Item>My added food items</Dropdown.Item>
              </Link>
              <Link to='/addFoodItems'><Dropdown.Item>Add A food item</Dropdown.Item></Link>
              <Link to='/userOrder'><Dropdown.Item>Order Items</Dropdown.Item></Link>
              <Dropdown.Divider />
              <Link to="/login">
                <Dropdown.Item>
                  {user ? (
                    <p onClick={handleSignOut} className="text-black">
                      Log Out
                    </p>
                  ) : (
                    <Link to="/login">
                      <p type="button" className="text-black">
                        Login
                      </p>
                    </Link>
                  )}
                </Dropdown.Item>
              </Link>
            </Dropdown>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default navbar;
