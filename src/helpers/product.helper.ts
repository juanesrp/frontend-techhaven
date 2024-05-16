import IProducts from "@/interfaces/IProduct";
const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export const getProductsDB = async () => {
  try {
    const res = await fetch(`${apiUrl}/products`);

    const products: IProducts[] = await res.json();

    return products;
  } catch (error: any) {
    throw new Error("Ocurrio un error: ", error);
  }
};

export const getProductsByCategoryId = async (categoryId: number) => {
  try {
    const productsDB = await getProductsDB();

    const productsCategory = productsDB.filter(
      (product) => product.categoryId === categoryId
    );

    return productsCategory;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const getProduct = async (id: number) => {
  try {
    const res = await fetch(`${apiUrl}/products/${id}`);
    const product: IProducts = await res.json();
    return product;
  } catch (error: any) {
    throw new Error(error);
  }
};
