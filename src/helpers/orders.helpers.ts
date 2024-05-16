const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export const createOrders = async (
  products: number[],
  token: string
): Promise<void> => {
  try {
    const response = await fetch(`${apiUrl}/orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify({ products }),
    });
    const data = await response.json();
    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const getOrders = async (token: string) => {
  try {
    const response = await fetch(`${apiUrl}/users/orders`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    });
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};
