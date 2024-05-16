import React from "react";
import CardCategories from "./CardCategories";
import { categoriesToPreLoad } from "@/helpers/categoriesPreload";

const Categories = () => {
  return (
    <section className="w-full py-12 flex flex-col justify-center items-center lg:py-20">
      <div className="flex flex-col justify-center items-center gap-2">
        <h2 className="text-4xl font-bold tracking-tighter">
          Explora nuestras categorías
        </h2>
        <p className="text-gray-500 text-xl">
          Encuentra el producto perfecto para tus necesidades
        </p>
      </div>
      <div className="mx-auto grid items-start gap-8 mt-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
        {categoriesToPreLoad.map((category) => (
          <CardCategories key={category.id} {...category} />
        ))}
      </div>
    </section>
  );
};

export default Categories;
