import { userSession } from "@/interfaces";
import React from "react";

const PersonalData = ({ user }: { user: userSession["user"] }) => {
  const { name, email, address, phone } = user;

  return (
    <section className="border md:w-1/3">
      <div className="flex flex-col p-5 gap-2">
        <h3 className="text-lg mb-3 font-bold">Tus datos</h3>
        <div className="grid gap-1">
          <label className="text-md">Nombre</label>
          <input
            className="border p-2 rounded-md focus:outline-none"
            readOnly
            value={name}
          />
        </div>
        <div className="grid gap-1">
          <label className="text-md">Email</label>
          <input
            className="border p-2 rounded-md focus:outline-none"
            readOnly
            value={email}
          />
        </div>
        <div className="grid gap-1">
          <label className="text-md">Teléfono</label>
          <input
            className="border p-2 rounded-md focus:outline-none"
            readOnly
            value={phone}
          />
        </div>
        <div className="grid gap-1">
          <label className="text-md">Dirección</label>
          <textarea
            className="border p-2 rounded-md focus:outline-none"
            readOnly
            value={address}
          />
        </div>
      </div>
    </section>
  );
};

export default PersonalData;
