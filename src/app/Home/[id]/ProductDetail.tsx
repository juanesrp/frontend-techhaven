import CardDetail from "@/components/CardDetail/CardDetail";
import { getProduct } from "@/helpers/product.helper";

import IProducts from "@/interfaces/IProduct";
import React from "react";

const ProductDetail = async ({ params }: { params: { id: number } }) => {
  const product = await getProduct(params.id);

  return (
    <div>
      <CardDetail product={product} />
    </div>
  );
};

export default ProductDetail;
