import { LoginProps, RegisterProps } from "@/interfaces";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export const userRegister = async ({
  name,
  lastName,
  email,
  address,
  phone,
  password,
  country,
  city,
}: RegisterProps) => {
  try {
    const res = await fetch(`${apiUrl}/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: `${name} ${lastName}`,
        email: email,
        phone: phone,
        password: password,
        address: `${country}, ${city}, ${address}`,
      }),
    });
    const data = await res.json();
    return data;
  } catch (error: any) {
    throw new Error("Ocurrio un error: ", error);
  }
};

export const userLogin = async ({ email, password }: LoginProps) => {
  try {
    const res = await fetch(`${apiUrl}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
    const data = await res.json();
    return data;
  } catch (error: any) {
    throw new Error("Ocurrio un error: ", error);
  }
};
