import { categoriesToPreLoad } from "@/helpers/categoriesPreload";
import Link from "next/link";
import React from "react";

const Sidebar = () => {
  return (
    <div className="px-4 w-1/7 mt-5 hidden h-fit  md:flex md:flex-col ml-5 ">
      <div className="border-b  border-black  w-full pb-2">
        <h3 className="text-xl font-bold">Categorias</h3>
      </div>

      <ul className="flex flex-col gap-1 mt-3">
        {categoriesToPreLoad.map((category) => (
          <Link
            href={`/Home/Category/${category.id}`}
            className="hover:underline"
            key={category.id}
          >
            {category.name}
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
