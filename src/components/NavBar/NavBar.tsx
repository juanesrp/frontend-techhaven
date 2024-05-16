"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { userSession } from "@/interfaces";
import { categoriesToPreLoad } from "@/helpers/categoriesPreload";
import IProducts from "@/interfaces/IProduct";
import Swal from "sweetalert2";
import Login from "@/components/Login/Login";

const NavBar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [modalUser, setModalUser] = useState(false);
  const [dropDownUser, setDropDownUser] = useState(false);
  const [userSession, setUserSession] = useState<userSession>();
  const [userName, setUserName] = useState<string>();
  const [cart, setCart] = useState<IProducts[]>([]);
  const [totalItems, setTotalItems] = useState(0);

  const toggleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };

  const toggleModalUser = () => {
    setModalUser(!modalUser);
  };

  const toggleDropDownUser = () => {
    setDropDownUser(!dropDownUser);
  };

  const handleLogout = () => {
    localStorage.removeItem("userSession");
    localStorage.removeItem("cart");
    localStorage.removeItem("total");
    Swal.fire({
      title: "Has cerrado sesion",
      icon: "success",
      timer: 1500,
    }).then(() => {
      toggleDropDownUser();
      window.location.reload();
    });
  };

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const userToken = localStorage.getItem("userSession");
      setUserSession(JSON.parse(userToken!));
    }
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(storedCart);
  }, []);

  useEffect(() => {
    if (userSession) {
      setUserName(userSession.user.name);
    }
  }, [userSession]);

  useEffect(() => {
    setTotalItems(cart.length);
  }, [cart]);

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex gap-4  order-1 md:order-none">
          <Link href="/Home" className="flex items-center rtl:space-x-reverse">
            <img src="/LogoTechHaven.png" className="h-10" alt="TechHaven" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              TechHaven
            </span>
          </Link>

          <div className="relative hidden md:block">
            <div className="absolute inset-y-0 start-0 flex items-center ps-2 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <span className="sr-only">Search icon</span>
            </div>
            <input
              type="text"
              id="search-navbar"
              className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search..."
            />
          </div>
        </div>
        <div className="flex gap-2 order-3">
          <Link href="/Cart" id="cart" className="relative flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="h-7 w-7 text-gray-900 dark:text-gray-400"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
            <span className="absolute -top-2 left-4 rounded-full bg-red-500 px-1 text-sm text-red-50">
              {totalItems}
            </span>
          </Link>

          <div id="user" className="flex items-center">
            <button
              onClick={userSession ? toggleDropDownUser : toggleModalUser}
              className="flex items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-7 h-7  text-gray-900 dark:text-gray-400"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
              {userName ? (
                <span className="text-sm hidden md:block">{userName}</span>
              ) : (
                <span className="text-sm hidden md:block">Iniciar Sesion</span>
              )}
            </button>
            <Login state={modalUser} toggleModal={toggleModalUser} />
            <div
              onClick={toggleDropDownUser}
              className="dropdown w-48 overflow-hidden bg-white rounded-md shadow absolute top-12 right-10"
            >
              {dropDownUser && (
                <ul>
                  <Link
                    href="/MyAccount"
                    className="px-3 py-3 text-sm font-medium flex items-center space-x-2 hover:bg-gray-200"
                  >
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                        />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </span>
                    <span> Mi Cuenta </span>
                  </Link>
                  <li className="px-3  py-3 text-sm font-medium flex items-center space-x-2 hover:bg-gray-200">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                        />
                      </svg>
                    </span>
                    <span onClick={handleLogout}> Cerrar sesión </span>
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>
        <div>
          <button
            data-collapse-toggle="navbar-search"
            type="button"
            onClick={toggleNavbar}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-search"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <button
            type="button"
            data-collapse-toggle="navbar-search"
            aria-controls="navbar-search"
            aria-expanded="false"
            className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2"
          >
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
            <span className="sr-only">Search</span>
          </button>
        </div>
        <div
          className={`${
            navbarOpen ? "" : "hidden"
          } overlay w-screen h-screen fixed top-0 left-0 flex items-center justify-center bg-black bg-opacity-50 md:hidden`}
        >
          <div
            className={`overflow-x-hidden fixed top-0  w-2/3 left-0 h-screen max-w-2xl dark:bg-gray-800 md:hidden `}
            id="navbar-search"
          >
            <div className="flex items-center justify-between px-4 py-4">
              <h3 className="text-xl font-bold dark:text-white">CATEGORIAS</h3>
              <button onClick={toggleNavbar} className="dark:text-white">
                X
              </button>
            </div>
            <ul className="flex flex-col p-4 order-1 md:p-0 mt-1 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8  md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              {categoriesToPreLoad.map((category) => (
                <Link
                  href={`/Home/Category/${category.id}`}
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  key={category.id}
                >
                  {category.name}
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
