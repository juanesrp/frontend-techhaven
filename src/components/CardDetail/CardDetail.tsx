"use client";
import IProducts from "@/interfaces/IProduct";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import Login from "@/components/Login/Login";
import { userSession } from "@/interfaces";

interface CardDetailProps {
  product: IProducts;
}

const CardDetail: React.FC<CardDetailProps> = ({ product }) => {
  const [userSession, setUserSession] = useState<userSession>();
  const [showLogin, setShowLogin] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const userToken = localStorage.getItem("userSession");
      setUserSession(JSON.parse(userToken!));
    }
  }, []);

  const handleBuy = () => {
    if (userSession) {
      const cart = JSON.parse(localStorage.getItem("cart") || "[]");
      cart.push(product);
      localStorage.setItem("cart", JSON.stringify(cart));
      Swal.fire({
        title: "Se agregó al carrito",
        icon: "success",
        showCancelButton: true,
        confirmButtonColor: "#8e9aa4",
        cancelButtonColor: "#269e0d",
        cancelButtonText: "Seguir comprando",
        confirmButtonText: "Ir al carrito",
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.href = "/Cart";
        } else {
          window.location.href = "/Home";
        }
      });
    } else {
      Swal.fire({
        title: "Debes iniciar sesion",
        icon: "error",
        text: "A continuación se te redirigira al login",
        timer: 1500,
      });

      setTimeout(() => {
        setShowLogin(!showLogin);
      }, 1500);
    }
  };

  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-5 m-auto w-2/3 border p-3 ">
      {showLogin && (
        <Login state={showLogin} toggleModal={() => setShowLogin(!showLogin)} />
      )}
      <div className="md:w-1/3">
        <img src={product.image} alt="Imagen" />
      </div>
      <div className="w-2/3 flex flex-col gap-3">
        <h1 className="text-2xl font-bold">{product.name}</h1>
        <p>{product.description}</p>
        <p className="text-lg font-semibold">${product.price}</p>
        <button
          onClick={handleBuy}
          className="bg-blue-600 text-white p-2 hover:bg-white hover:border hover:text-blue-600 hover:border-blue-600"
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default CardDetail;
