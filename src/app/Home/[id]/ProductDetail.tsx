import CardDetail from "@/components/CardDetail/CardDetail";
import { getProduct } from "@/helpers/product.helper";
import { productsPreload } from "@/helpers/productsPreload";

import IProducts from "@/interfaces/IProduct";
import React from "react";

const ProductDetail = async ({ params }: { params: { id: number } }) => {
  // const product = await getProduct(params.id);

  const product = productsPreload.find((item) => item.id === Number(params.id));
  return (
    <div>
      {product ? (
        <CardDetail product={product} />
      ) : (
        <p>No se encuentra el producto</p>
      )}
    </div>
  );
};

export default ProductDetail;
