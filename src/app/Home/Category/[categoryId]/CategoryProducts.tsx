"use client";
import Products from "@/components/Products/Products";
import Sidebar from "@/components/Sidebar/Sidebar";
import { categoriesToPreLoad } from "@/helpers/categoriesPreload";
import { getProductsByCategoryId } from "@/helpers/product.helper";
import { productsPreload } from "@/helpers/productsPreload";
import IProducts from "@/interfaces/IProduct";
import React, { useEffect, useState } from "react";
// Importa tu función para obtener productos

const CategoryProducts = ({ params }: { params: { categoryId: number } }) => {
  const [products, setProducts] = useState<IProducts[]>([]);

  const categoryName = categoriesToPreLoad.find(
    (category) => category.id === Number(params.categoryId)
  )?.name;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const fetchedProducts = await getProductsByCategoryId(
          Number(params.categoryId)
        );

        const productsCategory = productsPreload.filter(
          (product) => product.categoryId === Number(params.categoryId)
        );
        setProducts(productsCategory);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [params.categoryId]); // Se ejecuta cuando params.categoryId cambia

  return (
    <div>
      <div className="flex">
        <Sidebar />
        <div>
          <h3 className="text-3xl font-bold text-center mb-5">
            {categoryName}
          </h3>
          <Products products={products} />
        </div>
      </div>
    </div>
  );
};

export default CategoryProducts;
