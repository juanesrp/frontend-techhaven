import { LoginErrorProps, LoginProps } from "@/interfaces";
import userData from "./userData";

export const validateLogin = (values: LoginProps) => {
  let errors: LoginErrorProps = {};

  if (!values.email.trim()) {
    errors = { ...errors, email: "El correo electrónico es requerido" };
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors = { ...errors, email: "El correo electrónico debe ser valido" };
  }

  // Validación de la contraseña
  if (!values.password.trim()) {
    errors = { ...errors, password: "La contraseña es requerida" };
  }

  return errors;
};

export const validateRegister = (userData: userData) => {
  let errors = {};

  // Validación del nombre
  if (!userData.name?.trim()) {
    errors = { ...errors, name: "El nombre es requerido" };
  } else if (!/^[a-zA-Z\s]+$/.test(userData.name)) {
    errors = { ...errors, name: "El nombre debe contener solo letras" };
  }

  // Validación del nombre
  if (!userData.lastName?.trim()) {
    errors = { ...errors, lastName: "Los apellidos es requerido" };
  } else if (!/^[a-zA-Z\s]+$/.test(userData.lastName)) {
    errors = { ...errors, lastName: "El apellido debe contener solo letras" };
  }
  // Validación del número de documento de identidad
  // if (!userData.nDni) {
  //   errors = { ...errors, nDni: "El número de documento es requerido" };
  // } else if (!/^[1-9]\d{5,10}$/.test(userData.nDni)) {
  //   errors = {
  //     ...errors,
  //     nDni: "El número de documento debe contener solo números",
  //   };
  // }

  // Validación del correo electrónico
  if (!userData.email?.trim()) {
    errors = { ...errors, email: "El correo electrónico es requerido" };
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userData.email)) {
    errors = { ...errors, email: "El correo electrónico debe ser valido" };
  }

  if (!userData.country?.trim()) {
    errors = { ...errors, country: "El nombre de el País es requerido" };
  } else if (!/^[a-zA-Z\s]+$/.test(userData.country)) {
    errors = {
      ...errors,
      country: "El nombre de el País debe contener solo letras",
    };
  }

  if (!userData.city?.trim()) {
    errors = { ...errors, city: "El de la ciudad es requerido" };
  } else if (!/^[a-zA-Z\s]+$/.test(userData.city)) {
    errors = {
      ...errors,
      city: "El nombre de la ciudad debe contener solo letras",
    };
  }

  if (!userData.address?.trim()) {
    errors = { ...errors, adress: "La dirección es requerido" };
  } else if (!/^[A-Za-z0-9\s,.'\-#]+$/.test(userData.address)) {
    errors = { ...errors, adress: "La dirección debe contener solo letras" };
  }

  if (!userData.phone?.trim()) {
    errors = { ...errors, phone: "El celular es requerido" };
  } else if (!/^\d{10}$/.test(userData.phone)) {
    errors = { ...errors, phone: "El nombre debe contener solo números" };
  }

  // Validación de la contraseña
  if (!userData.password?.trim()) {
    errors = { ...errors, password: "La contraseña es requerida" };
  } else if (userData.password.length < 6) {
    errors = {
      ...errors,
      password: "La contraseña debe tener al menos 6 caracteres",
    };
  }
  //Confirmacion de la contraseña
  if (!userData.confirmPassword?.trim()) {
    errors = { ...errors, confirmPassword: "Confirme la contraseña" };
  } else if (userData.password !== userData.confirmPassword) {
    errors = { ...errors, confirmPassword: "Las contraseña no coinciden" };
  }
  // console.log("Errores en validate", errors);
  return errors;
};
