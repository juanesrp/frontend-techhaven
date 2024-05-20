"use client";
import CardDetail from "@/components/CardDetail/CardDetail";
import { getProduct } from "@/helpers/product.helper";
import { productsPreload } from "@/helpers/productsPreload";

import IProducts from "@/interfaces/IProduct";
import React, { useEffect, useState } from "react";

const ProductDetail = ({ params }: { params: { id: number } }) => {
  const [product, setProduct] = useState<IProducts>();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const product = await getProduct(params.id);
        setProduct(product);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  // const product = productsPreload.find((item) => item.id === Number(params.id));
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
