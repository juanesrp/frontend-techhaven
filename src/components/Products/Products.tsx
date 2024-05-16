import { productsPreload } from "@/helpers/productsPreload";
import React from "react";
import Card from "@/components/Card/Card";
import IProducts from "@/interfaces/IProduct";

interface ProductsProps {
  products: IProducts[];
}

const Products: React.FC<ProductsProps> = (productsDB) => {
  const { products } = productsDB;

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-4 w-full my-0 mx-auto">
        {products.map((product: IProducts) => (
          <Card key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
