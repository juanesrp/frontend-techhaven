import React from "react";
import Link from "next/link";

const FirstSection = () => {
  return (
    <section className="w-full h-auto pt-12  border-y">
      <div className="px-4 md:px-6 space-y-10 xl:space-y-16">
        <div className="flex ">
          <div className="lg:text-left">
            <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
              Tecnología de vanguardia para tu hogar
            </h1>
            <p className="mt-4 max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Descubre nuestra selección de productos de tecnología de alta
              calidad y diseño elegante.
            </p>
            <div className="space-x-4 mt-6">
              <Link
                className="rounded bg-blue-600 px-4 py-2 text-white "
                href="/Home"
              >
                Comprar ahora
              </Link>
            </div>
          </div>
          <div className="hidden md:block w-1/2">
            <img
              alt="Hero"
              className="mx-auto aspect-[3/2] overflow-hidden rounded-t-full object-cover"
              height="300"
              src="/imgLanding.jpeg"
              width="1270"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FirstSection;
