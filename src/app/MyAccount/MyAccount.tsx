"use client";

import Order from "@/components/Order/Order";
import PersonalData from "@/components/PersonalData/PersonalData";
import { getOrders } from "@/helpers/orders.helpers";
import { IOrder, userSession } from "@/interfaces";
import { redirect } from "next/navigation";
import React, { useEffect, useState } from "react";

const MyAccount = () => {
  const [userSession, setUserSession] = useState<userSession>();
  const [orders, setOrders] = useState([]);
  console.log(orders);

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const userToken = localStorage.getItem("userSession");
      setUserSession(JSON.parse(userToken!));
      !userToken && redirect("/Home");
    }
  }, []);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await getOrders(userSession?.token!);
        setOrders(response);
      } catch (error: any) {
        throw new Error(error);
      }
    };

    userSession && getData();
  }, [userSession]);

  return (
    <div className="flex flex-col md:flex-row gap-4 p-4">
      {userSession && <PersonalData user={userSession.user} />}
      <section className="border flex flex-col md:w-2/3">
        <div className="flex flex-col p-5 gap-2">
          <h3 className="text-lg mb-3 font-bold">Tus pedidos</h3>
          {orders ? (
            orders.map((order: IOrder) => (
              <Order key={order.id} order={order} />
            ))
          ) : (
            <p>No hay pedidos</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default MyAccount;
