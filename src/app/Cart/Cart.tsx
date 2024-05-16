"use client";
import React, { useEffect, useState } from "react";

import Shiping from "@/Components/forms/Shiping";
import PayMethod from "@/Components/forms/PayMethod";
import CartProduct from "@/Components/CartProduct/CartProduct";
import IProducts from "@/interfaces/IProduct";
import { userSession } from "@/interfaces";
import { createOrders, getOrders } from "@/helpers/orders.helpers";
import Swal from "sweetalert2";

const Cart = () => {
  const [userSession, setUserSession] = useState<userSession>();
  const [cart, setCart] = useState<IProducts[]>([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const userToken = localStorage.getItem("userSession");
      setUserSession(JSON.parse(userToken!));
      if (!userToken) {
        Swal.fire({
          title: "Debes iniciar sesion",
          icon: "error",
          timer: 1500,
        }).then(() => {
          setTimeout(() => {
            window.location.href = "/Home";
          }, 1500);
        });
      }

      const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
      if (storedCart) {
        let totalCart = 0;
        storedCart?.forEach((product: IProducts) => {
          totalCart += product.price;
        });
        setTotal(totalCart);
        setCart(storedCart);
      }
    }
  }, []);

  //Remove product
  const handleRemoveProduct = (id: number) => {
    const newCart = cart.filter((product) => product.id !== id);
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
    const totalCart = newCart.reduce(
      (accum, product) => accum + product.price,
      0
    );
    setTotal(totalCart);
    localStorage.setItem("total", JSON.stringify(totalCart));
  };

  //Send order
  const handleBuy = async () => {
    try {
      const orderProducts = new Set(cart.map((product) => product.id));
      await createOrders(Array.from(orderProducts), userSession?.token!);
      localStorage.setItem("cart", "[]");
      setCart([]);
      setTotal(0);
      Swal.fire({
        title: "Compra realizada con exito",
        icon: "success",
        confirmButtonColor: "#8e9aa4",
        confirmButtonText: "Seguir comprando",
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.href = "/Home";
        }
      });
    } catch (error: any) {
      throw new Error(error);
    }
  };

  return (
    <div className="flex flex-col gap-4 mt-5 md:flex-row">
      <div className="flex flex-col  md:w-5/12 gap-3">
        <Shiping />
        <PayMethod />
      </div>
      <div className="mx-5 md:mr-5 md:w-7/12">
        <div className="flex flex-col border p-5 gap-2 ">
          <h1 className="font-bold text-lg">Resumen del pedido</h1>
          {cart.length > 0 ? (
            cart?.map((product) => (
              <>
                <div className="flex gap-3 border">
                  <CartProduct key={product.id} product={product} />
                  <button
                    onClick={() => handleRemoveProduct(product.id)}
                    className="flex w-1/12 justify-end items-center pr-1"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                      />
                    </svg>
                  </button>
                </div>
              </>
            ))
          ) : (
            <div>No tienes productos en tu carrito</div>
          )}
        </div>
        <div className="flex flex-col gap-3 mt-1 ">
          <div className="flex gap-2">
            <input
              className="border w-2/3"
              placeholder="Cupon de descuento"
              id="cuponCode"
              type="text"
            />
            <button className="bg-blue-600 text-white p-2 w-1/3">
              Aplicar cupón
            </button>
          </div>

          <hr />
          <div className="flex justify-between mb-3">
            <h3 className="font-bold">Total: </h3>
            <h3 className="font-bold">$ {total}</h3>
          </div>
        </div>
        <button
          disabled={cart.length === 0}
          onClick={handleBuy}
          className="disabled:cursor-not-allowed disabled:bg-gray-200  bg-blue-600 text-white p-2 w-full hover:bg-white hover:text-blue-600 hover:border hover:border-blue-600 "
        >
          Pagar
        </button>
      </div>
    </div>
  );
};

export default Cart;
