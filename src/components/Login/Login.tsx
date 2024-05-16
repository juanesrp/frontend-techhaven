"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { useState } from "react";
import { LoginErrorProps, LoginProps } from "@/interfaces";
import { validateLogin } from "@/helpers/validate";
import { userLogin } from "@/helpers/user.helper";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

interface LoginParams {
  state: boolean;
  toggleModal: () => void;
}

const Login = ({ state, toggleModal }: LoginParams) => {
  const [userData, setUserData] = useState<LoginProps>({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<LoginErrorProps>({
    email: "",
    password: "",
  });

  const router = useRouter();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleOnSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const fetchUser = await userLogin(userData);

    const user = {
      name: fetchUser.user.name,
      email: fetchUser.user.email,
      id: fetchUser.user.id,
      address: fetchUser.user.address,
      orders: fetchUser.user.orders,
      phone: fetchUser.user.phone,
      role: fetchUser.user.role,
    };

    localStorage.setItem(
      "userSession",
      JSON.stringify({
        token: fetchUser.token,
        user: user,
      })
    );
    setUserData({ email: "", password: "" });
    toggleModal(); // Cerrar el modal
    await Swal.fire({
      title: "Bienvenido",
      text: "Sesión iniciada con exito",
      icon: "success",
      confirmButtonColor: "#8e9aa4",
      timer: 1500,
    });
    window.location.reload(); // Actualizar la página
  };

  useEffect(() => {
    const isFormEmpty = Object.values(userData).every((value) => value === "");
    if (!isFormEmpty) {
      setErrors(validateLogin(userData));
    }
  }, [userData]);

  return (
    <>
      {state && (
        <div className="overlay w-screen h-screen fixed top-0 left-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="left-0 right-0 bottom-0 fixed sm:relative sm:flex bg-white">
            <div className="w-full sm:w-1/2 sm:border-r-2">
              <form
                onSubmit={handleOnSubmit}
                className="flex flex-col gap-4 p-5"
              >
                <h1 className="text-2xl">Iniciar Sesion</h1>
                <div className="flex flex-col gap-1">
                  <label className="text- md" htmlFor="email">
                    Correo electronico
                  </label>
                  <input
                    className="border p-2"
                    type="email"
                    id="email"
                    name="email"
                    value={userData.email}
                    placeholder="Email adress"
                    onChange={handleInputChange}
                  />
                  {errors.email && (
                    <p className="italic text-xs text-gray-400">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-md" htmlFor="password">
                    Contraseña
                  </label>
                  <input
                    className="border p-2"
                    type="password"
                    id="password"
                    name="password"
                    value={userData.password}
                    placeholder="Password"
                    onChange={handleInputChange}
                  />
                  {errors.password && (
                    <p className="italic text-xs text-gray-400">
                      {errors.password}
                    </p>
                  )}
                </div>
                <span className="cursor-pointer text-sm text-blue-600 underline">
                  Olvidaste tu contraseña
                </span>

                <button
                  disabled={!userData.email || !userData.password}
                  className="bg-blue-600 text-white p-2 disabled:bg-gray-300 disabled:text-gray-400"
                >
                  Iniciar Sesion
                </button>
              </form>
            </div>
            <div className="flex flex-col justify-center items-center sm:w-1/2 gap-3">
              <div className="flex flex-col sm:justify-center sm:items-center gap-4 p-5 w-full">
                <h2 className="hidden sm:block text-2xl font-semibold">
                  Crea tu cuenta
                </h2>
                <p className="hidden sm:block text-sm text-center text-gray-500">
                  Vive una experiencia completa de compra
                </p>

                <Link href="/Register" className="flex flex-col ">
                  <button className=" border border-blue-600 text-blue-600  p-2 text-center text-sm hover:bg-blue-600 hover:text-white">
                    Crear Cuenta
                  </button>
                </Link>
              </div>
              <button
                onClick={toggleModal}
                className="absolute top-2 right-2 rounded-md hover:bg-gray-100 "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 text-gray-500"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
