import IProducts from "@/interfaces/IProduct";
import React from "react";

const CartProduct = ({ product }: { product: IProducts }) => {
  const { name, price, image } = product;
  return (
    <div className="flex w-11/12 gap-2">
      <div className="w-1/3 flex items-center justify-center p-2">
        <img src={image} alt="Producto" className="w-1/2" />
      </div>
      <div className="flex flex-col justify-center items-center w-2/3">
        <h1>{name}</h1>
        <p>Precio: {price}</p>
      </div>
    </div>
  );
};

export default CartProduct;
