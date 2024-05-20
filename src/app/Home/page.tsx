"use client";
import Products from "@/components/Products/Products";
import Sidebar from "@/components/Sidebar/Sidebar";
import { getProductsDB } from "@/helpers/product.helper";
import { productsPreload } from "@/helpers/productsPreload";
import IProducts from "@/interfaces/IProduct";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [products, setProducts] = useState<IProducts[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = await getProductsDB();
        setProducts(products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);
  // const products = productsPreload;

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
