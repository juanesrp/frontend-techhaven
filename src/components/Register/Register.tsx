"use client";
import { useState, useEffect } from "react";
import { validateRegister } from "@/helpers/validate";
import { RegisterErrorProps, RegisterProps } from "@/interfaces";
import { userRegister } from "@/helpers/user.helper";

const Register = () => {
  const initialData = {
    name: "",
    lastName: "",
    email: "",
    country: "",
    city: "",
    address: "",
    phone: "",
    password: "",
    confirmPassword: "",
  };

  const [userData, setUserData] = useState<RegisterProps>(initialData);
  const [errors, setErrors] = useState<RegisterErrorProps>(initialData);
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setUserData({ ...userData, [name]: value });
  };

  useEffect(() => {
    // Verifica si algún campo del formulario ya ha sido modificado
    const isFormEmpty = Object.values(userData).every((value) => value === "");

    if (!isFormEmpty) {
      setErrors(validateRegister(userData));
    }
  }, [userData]);

  const handleOnSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // await userRegister(userData);
    alert(`${userData.name} ${userData.lastName} ha sido registrado`);
    setUserData(initialData);
  };

  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <h1 className="text-2xl">Registrate</h1>
      <form
        onSubmit={handleOnSubmit}
        className="flex flex-col gap-4 border p-5 mx-5"
      >
        <div className="flex flex-col gap-2">
          <div className="flex flex-col  md:flex-row gap-3 ">
            <div className="flex flex-col gap-2 w-full md:w-1/2">
              <label htmlFor="name">Nombre</label>
              <input
                className="border p-2"
                id="name"
                type="text"
                name="name"
                value={userData.name}
                placeholder="Nombre Completo"
                onChange={handleInputChange}
              />
              {errors.name && (
                <p className="italic text-xs text-red-400">{errors.name}</p>
              )}
            </div>
            <div className="flex flex-col gap-2 w-full md:w-1/2">
              <label htmlFor="lastName">Apellidos</label>
              <input
                className="border p-2"
                id="lastName"
                type="text"
                name="lastName"
                value={userData.lastName}
                placeholder="Apellidos"
                onChange={handleInputChange}
              />
              {errors.lastName && (
                <p className="italic text-xs text-red-400">{errors.lastName}</p>
              )}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email">Correo electrónico</label>
            <input
              className="border p-2"
              id="email"
              type="text"
              name="email"
              value={userData.email}
              placeholder="Email"
              onChange={handleInputChange}
            />
            {errors.email && (
              <p className="italic text-xs text-red-400">{errors.email}</p>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="country">País</label>
            <input
              className="border p-2"
              id="country"
              type="text"
              name="country"
              value={userData.country}
              placeholder="País"
              onChange={handleInputChange}
            />
            {errors.country && (
              <p className="italic text-xs text-red-400">{errors.country}</p>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="city">Ciudad</label>
            <input
              className="border p-2"
              id="city"
              type="text"
              name="city"
              value={userData.city}
              placeholder="Ciudad"
              onChange={handleInputChange}
            />
            {errors.city && (
              <p className="italic text-xs text-red-400">{errors.city}</p>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="adress">Dirección</label>
            <input
              className="border p-2"
              id="address"
              type="text"
              name="address"
              value={userData.address}
              placeholder="Dirección"
              onChange={handleInputChange}
            />
            {errors.address && (
              <p className="italic text-xs text-red-400">{errors.address}</p>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="phone">Celular</label>
            <input
              className="border p-2"
              id="phone"
              type="text"
              name="phone"
              value={userData.phone}
              onChange={handleInputChange}
              placeholder="Celular"
            />
            {errors.phone && (
              <p className="italic text-xs text-red-400">{errors.phone}</p>
            )}
          </div>
          <div className="flex flex-col  md:flex-row gap-3 ">
            <div className="flex flex-col gap-2 w-full md:w-1/2">
              <label htmlFor="password">Contraseña</label>
              <input
                className="border p-2"
                id="password"
                type="password"
                name="password"
                value={userData.password}
                placeholder="***********"
                onChange={handleInputChange}
              />
              {errors.password && (
                <p className="italic text-xs text-red-400">{errors.password}</p>
              )}
            </div>
            <div className="flex flex-col gap-2 w-full md:w-1/2">
              <label htmlFor="confirmPassword">Confirma tu contraseña</label>
              <input
                className="border p-2"
                id="confirmPassword"
                type="password"
                name="confirmPassword"
                value={userData.confirmPassword}
                placeholder="***********"
                onChange={handleInputChange}
              />
              {errors.confirmPassword && (
                <p className="italic text-xs text-red-400">
                  {errors.confirmPassword}
                </p>
              )}
            </div>
          </div>
          <div className="flex gap-2">
            <input id="saveInformation" type="checkbox" />
            <label htmlFor="saveInformation">
              Acepto los terminos y condiciones de tu sitio
            </label>
          </div>
        </div>
        <div className="flex w-full">
          <button
            disabled={Object.values(userData).every((value) => value === "")}
            className="disabled:bg-gray-300 bg-blue-600 text-white p-2 w-full"
          >
            Continuar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
