import React from "react";

const PayMethod = () => {
  return (
    <form className="flex flex-col gap-4 border p-5 ml-5">
      <h1 className="text-2xl">2. Método de pago</h1>
      <div className="flex flex-col gap-2">
        <div className="flex justify-between">
          <p className="text-md">Tarjeta de Debito/Credito</p>
          <div className="flex gap-2">
            <img className="bg-white w-6" src="/DinersClub.svg" alt="Diners" />
            <img className="bg-blue-600 w-6" src="/AMEX.svg" alt="AMEX" />
            <img
              className="bg-white w-6"
              src="/Mastercard.svg"
              alt="Mastercard"
            />
            <img className="bg-white w-6" src="/visa-logo.svg" alt="visa" />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="cardNumber">Número de tajeta</label>
          <input
            className="border p-2"
            id="cardNumber"
            type="text"
            placeholder="XXXX-XXXX-XXXX-XXXX"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="name">Nombre del titular de la tarjeta</label>
          <input
            className="border p-2"
            id="name"
            type="text"
            placeholder="Nombre del titular de la tarjeta"
          />
        </div>
        <div className="flex gap-3">
          <div className="flex flex-col gap-2 w-1/2">
            <label htmlFor="expDate">Fecha de Expiración</label>
            <input
              className="border p-2"
              id="expDate"
              type="text"
              placeholder="MM/AA"
            />
          </div>
          <div className="flex flex-col gap-2 w-1/2">
            <label htmlFor="CVV">CVV</label>
            <input
              className="border p-2"
              id="CVV"
              type="text"
              placeholder="CVV"
            />
          </div>
        </div>
        <div className="flex gap-2">
          <input id="saveInformation" type="checkbox" />
          <label htmlFor="saveInformation">
            Usar la misma dirección para la facturación
          </label>
        </div>
      </div>
      <div className="flex justify-end">
        <button className="bg-blue-600 text-white p-2 w-1/3">Continuar</button>
      </div>
    </form>
  );
};

export default PayMethod;
