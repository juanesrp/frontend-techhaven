import React from "react";
import Link from "next/link";

const Contact = () => {
  return (
    <form className="flex flex-col gap-4 border p-5 ml-5">
      <h1 className="text-2xl">1. Contacto</h1>
      <div className="flex flex-col gap-2">
        <label className="text-md" htmlFor="email">
          Email
        </label>
        <input
          className="border p-2"
          type="email"
          id="email"
          placeholder="Email adress"
        />
        <p>
          Ya tienes una cuenta?{" "}
          <Link className="font-black hover:underline" href="/Login">
            Iniciar Sesion
          </Link>
        </p>
      </div>
      <div className="flex justify-end">
        <button className="bg-blue-600 text-white p-2 w-1/3">Continuar</button>
      </div>
    </form>
  );
};

export default Contact;
