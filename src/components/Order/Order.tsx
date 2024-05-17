import { IOrder } from "@/interfaces";
import { format } from "date-fns";
import React from "react";

const Order = ({ order }: { order: IOrder }) => {
  const { date, status, products } = order;
  const formatDate = format(new Date(date), "dd/MM/yyyy");

  let total = 0;
  products.forEach((product) => {
    total += product.price;
  });

  return (
    <div className="border">
      <div className="flex flex-col sm:flex-row justify-between p-2">
        <div className="flex gap-2">
          <p className="font-bold">Estado: </p>
          <p>{status}</p>
        </div>
        <div className="flex gap-2">
          <p className="font-bold">Fecha: </p>
          <p>{formatDate}</p>
        </div>
        <div className="flex font-bold gap-2">
          <p>Total:</p>
          <p>{`$ ${total}`}</p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row p-2 gap-2">
        <p className="font-bold">Productos:</p>
        {products.map((product, index) => (
          <p key={index}>
            {product.name} {index !== products.length - 1 ? "," : ""}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Order;
