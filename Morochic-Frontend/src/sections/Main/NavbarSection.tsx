import HeaderLogo from "../../components/NavbarLogo";
import { Input } from "../../components/Input";
import Sidebar from "../../components/Sidebar";
import SidebarItem from "../../components/SidebarItem";
import { WishListDropdown } from "../../components/WishListDropdown";
import Dropdown from "../../components/Dropdown";
import { useAuth } from "../../contexts/AuthContext";
import { Link } from "react-router-dom";
import {
  CART,
  CATALOG,
  HOME,
  LOGIN,
  PROFILE,
  REGISTER,
  SETTINGS,
} from "../../App";
import { SpinnerCircular } from "spinners-react";
import { useUser } from "../../contexts/UserContext";
import moment from "moment";
import { ChangeEvent, useEffect, useState } from "react";
import { useProduct } from "../../contexts/ProductContext";
import { SearchSuggestions } from "../../components/SearchSuggestions";

const Navbar = () => {
  const { logout, currentUser, isLoggedIn } = useAuth();
  const { isLoading, wishlist, fetchWishlist, wishlistIsLoading } = useUser();
  const { fetchProductsBySearchValue } = useProduct();
  const [searchValue, setSearchValue] = useState<string>("");
  const [openSearchSuggestions, setOpenSearchSuggestions] = useState<boolean>(false);

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    const searchKeyword = e.target.value;
    setSearchValue(searchKeyword);
  };

  useEffect(() => {
    if (searchValue) {
      setOpenSearchSuggestions(true);
      fetchProductsBySearchValue(searchValue);
    } else {
      setOpenSearchSuggestions(false);
    }

    return () => {
      setOpenSearchSuggestions(false);
    };
  }, [searchValue]);

  return (
    <>
      <nav className="bg-[#FFFFFF] shadow-sm fixed top-0 left-0 w-full z-40">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 md:px-8 flex flex-wrap items-center justify-between p-3">
          <Link
            to={HOME}
            className="flex items-center space-x-3 md:w-[140px] w-[100px] rtl:space-x-reverse"
          >
            <HeaderLogo />
          </Link>
          <div className="w-1/2 sm:block hidden">
            <label className="mb-2 text-sm font-medium text-gray-900 sr-only ">
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#000000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </div>
              <Input
                type="search"
                onChange={handleSearchChange}
                autoComplete="off"
                name="searchBar"
                className="block p-1 rounded-full ps-10 text-sm text-gray-900 border-2 border-gray-300 border-slate-900 bg-gray-50"
                placeholder="Looking for something?"
              />
                <SearchSuggestions open={openSearchSuggestions} />
            </div>
          </div>
          <div className="flex md:gap-10 items-center">
            <div className="hidden w-full md:block md:w-auto md:block hidden">
              <ul className="flex flex-col gap-2 justify-center font-medium md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:mt-0 md:border-0">
                <div className="flex gap-4 justify-center">
                  <li data-dropdown-toggle="WishList" onClick={fetchWishlist}>
                    <span className="block cursor-pointer text-white bg-blue-700 rounded sm:bg-transparent rounded-full md:text-blue-700 md:p-0">
                      <svg
                        className="hover:fill-gray-200"
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#000000"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                      </svg>
                    </span>
                  </li>
                  <WishListDropdown id="WishList">
                    {wishlistIsLoading ? (
                      <div className="flex h-[95%] justify-center items-center">
                        <SpinnerCircular color="#000000" />
                      </div>
                    ) : currentUser && Object.keys(currentUser).length > 0 ? (
                      <div className="h-full overflow-auto">
                        {wishlist &&
                        Array.isArray(wishlist) &&
                        wishlist.length > 0 ? (
                          wishlist.map((wishedItem, key) => (
                            <Link
                              key={key}
                              to={"catalog/product/" + wishedItem.id}
                              className="h-20 w-full"
                            >
                              <div className="p-5 bg-gray-100 text-sm hover:bg-gray-200 border-b-2 border-slate-700">
                                <h1>
                                  <span className="font-bold">Title:</span>{" "}
                                  {wishedItem.title}
                                </h1>
                                <h2>
                                  {moment(wishedItem.created_at).fromNow()}
                                </h2>
                              </div>
                            </Link>
                          ))
                        ) : (
                          <></>
                        )}
                      </div>
                    ) : (
                      <div className="h-full flex justify-center items-center">
                        <h1 className="text-center text-sm text-slate-500 font-regular">
                          <Link
                            className="text-blue-700 hover:underline"
                            to={LOGIN}
                          >
                            Login
                          </Link>{" "}
                          or{" "}
                          <Link
                            className="text-blue-700 hover:underline"
                            to={REGISTER}
                          >
                            Make an Account
                          </Link>{" "}
                          to use this feature
                        </h1>
                      </div>
                    )}
                  </WishListDropdown>
                  <li>
                    <Link to={CART}>
                      <span className="block cursor-pointer text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">
                        <svg
                          className="hover:fill-gray-200"
                          xmlns="http://www.w3.org/2000/svg"
                          width="22"
                          height="22"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#000000"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <circle cx="10" cy="20.5" r="1" />
                          <circle cx="18" cy="20.5" r="1" />
                          <path d="M2.5 2.5h3l2.7 12.4a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.6l1.6-8.4H7.1" />
                        </svg>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#000000"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M21.5 12H16c-.7 2-2 3-4 3s-3.3-1-4-3H2.5" />
                        <path d="M5.5 5.1L2 12v6c0 1.1.9 2 2 2h16a2 2 0 002-2v-6l-3.4-6.9A2 2 0 0016.8 4H7.2a2 2 0 00-1.8 1.1z" />
                      </svg>
                    </a>
                  </li>
                </div>
              </ul>
            </div>
            <div className="sm:hidden block">
              <button
                data-dropdown-toggle="searchBar"
                className="inline-flex transition-all items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#000000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </button>
              <Dropdown
                header={
                  <h1 className="font-medium text-[26px] my-5">Search Bar</h1>
                }
                id="searchBar"
                className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-full"
              >
                <div className="flex justify-center">
                  <form className="w-5/6">
                    <label className="mb-2 text-sm font-medium text-gray-900 sr-only ">
                      Search
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#000000"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <circle cx="11" cy="11" r="8"></circle>
                          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        </svg>
                      </div>
                      <Input
                        type="search"
                        onChange={handleSearchChange}
                        autoComplete="off"
                        name="searchBar"
                        className="block p-1 rounded-full ps-10 focus:rounded-full text-sm text-gray-900 border-2 border-gray-300 border-slate-900 bg-gray-50"
                        placeholder="Looking for something?"
                      />
                      {/* <input  id="default-search" className=""  required /> */}
                    </div>
                  </form>
                </div>
              </Dropdown>
            </div>
            <button
              data-drawer-backdrop="false"
              data-drawer-target="navbar-sidebar"
              data-drawer-toggle="navbar-sidebar"
              data-drawer-placement="right"
              type="button"
              className="inline-flex transition-all items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="navbar-dropdown"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
      </nav>
      <Sidebar id="navbar-sidebar" header="Menu">
        {isLoading ? (
          <div className="mt-20 flex justify-center items-center">
            <SpinnerCircular color="#000000" />
          </div>
        ) : (
          <>
            <div className="md:hidden block">
              <SidebarItem
                header="Shopping Cart"
                to={CART}
                svg={
                  <svg
                    className="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="10" cy="20.5" r="1" />
                    <circle cx="18" cy="20.5" r="1" />
                    <path d="M2.5 2.5h3l2.7 12.4a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.6l1.6-8.4H7.1" />
                  </svg>
                }
              />
              <SidebarItem
                header="Inbox"
                svg={
                  <svg
                    className="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21.5 12H16c-.7 2-2 3-4 3s-3.3-1-4-3H2.5" />
                    <path d="M5.5 5.1L2 12v6c0 1.1.9 2 2 2h16a2 2 0 002-2v-6l-3.4-6.9A2 2 0 0016.8 4H7.2a2 2 0 00-1.8 1.1z" />
                  </svg>
                }
              />
            </div>
            <SidebarItem
              header="Catalog"
              to={CATALOG}
              svg={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#000000"
                  strokeWidth="2"
                  aria-hidden="true"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              }
            />
            <SidebarItem
              header="Profile"
              to={PROFILE}
              svg={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#000000"
                  strokeWidth="2"
                  aria-hidden="true"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              }
            />

            <SidebarItem
              header="Settings"
              to={SETTINGS}
              svg={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#000000"
                  strokeWidth="2"
                  aria-hidden="true"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 00-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 00-2.282.819l-.922 1.597a1.875 1.875 0 00.432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 000 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 00-.432 2.385l.922 1.597a1.875 1.875 0 002.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 002.28-.819l.923-1.597a1.875 1.875 0 00-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 000-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 00-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 00-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 00-1.85-1.567h-1.843zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              }
            />
            {isLoggedIn ? (
              <SidebarItem
                header="Log Out"
                onClick={logout}
                svg={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-log-out w-5 h-5"
                  >
                    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                    <polyline points="16 17 21 12 16 7"></polyline>
                    <line x1="21" y1="12" x2="9" y2="12"></line>
                  </svg>
                }
              />
            ) : (
              <SidebarItem
                header="Login"
                to={LOGIN}
                svg={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-log-in w-5 h-5"
                  >
                    <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
                    <polyline points="10 17 15 12 10 7"></polyline>
                    <line x1="15" y1="12" x2="3" y2="12"></line>
                  </svg>
                }
              />
            )}
          </>
        )}
      </Sidebar>
    </>
  );
};

export default Navbar;
