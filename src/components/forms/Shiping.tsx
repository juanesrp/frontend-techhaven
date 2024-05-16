import React from "react";

const Shiping = () => {
  return (
    <form className="flex flex-col gap-4 border p-5 ml-5">
      <h1 className="text-2xl">1. Entrega</h1>
      <div className="flex flex-col gap-2">
        <div className="flex gap-3">
          <div className="flex flex-col gap-2 w-1/2">
            <label htmlFor="name">Nombre</label>
            <input
              className="border p-2"
              id="name"
              type="text"
              placeholder="Nombre Completo"
            />
          </div>
          <div className="flex flex-col gap-2 w-1/2">
            <label htmlFor="lastName">Apellidos</label>
            <input
              className="border p-2"
              id="lastName"
              type="text"
              placeholder="Apellidos"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="country">País</label>
          <input
            className="border p-2"
            id="country"
            type="text"
            placeholder="País"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="city">Ciudad</label>
          <input
            className="border p-2"
            id="city"
            type="text"
            placeholder="Ciudad"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="adress">Dirección</label>
          <input
            className="border p-2"
            id="adress"
            type="text"
            placeholder="Dirección"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="phone">Celular</label>
          <input
            className="border p-2"
            id="phone"
            type="text"
            placeholder="Celular"
          />
        </div>
        <div className="flex gap-2">
          <input id="saveInformation" type="checkbox" />
          <label htmlFor="saveInformation">
            Guarda esta información para las siguientes compras
          </label>
        </div>
      </div>
    </form>
  );
};

export default Shiping;
