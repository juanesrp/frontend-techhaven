import ICategories from "@/interfaces/ICategories";
import React from "react";

const CardCategories = ({ id, name, img }: ICategories) => {
  return (
    <div className="flex flex-col items-center justify-between w-72 h-56 hover:scale-105 hover:shadow-lg">
      <img alt={name} className="h-40" src={img} />
      <h3 className="text-lg font-bold">{name}</h3>
    </div>
  );
};

export default CardCategories;
