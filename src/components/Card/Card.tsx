import IProducts from "@/interfaces/IProduct";
import Link from "next/link";

const Card: React.FC<IProducts> = ({
  id,
  name,
  description,
  price,
  stock,
  image,
}) => {
  return (
    <Link
      href={`/Home/${id}`}
      className="w-full flex flex-col justify-center items-center p-2 shadow-lg max-w-64 h-72 m-2 "
    >
      <img src={image} alt={name} className="w-36" />
      <h3 className="text-xl m-2 font-bold">{name}</h3>
      <h5 className="text-lg m-2 font-semibold">${price}</h5>
    </Link>
  );
};

export default Card;
