import NavBar from "@/Components/NavBar/NavBar";
import Products from "@/Components/Products/Products";
import Sidebar from "@/Components/Sidebar/Sidebar";
import { getProductsDB } from "@/helpers/product.helper";
import IProducts from "@/interfaces/IProduct";
import React from "react";

const Home = async () => {
  const products = await getProductsDB();

  return (
    <div>
      <div className="flex">
        <Sidebar />
        <div>
          <h1 className="text-3xl font-bold text-center mb-5 ">
            Nuestros Productos
          </h1>
          <Products products={products} />
        </div>
      </div>
    </div>
  );
};

export default Home;
