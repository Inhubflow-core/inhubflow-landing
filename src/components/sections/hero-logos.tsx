import Image from "next/image";
import React from "react";

export default function HeroLogos() {
  const logos = [
    { src: "/images/brands/br-1.svg", alt: "Brand 1", width: 80, height: 32 },
    { src: "/images/brands/br-2.svg", alt: "Brand 2", width: 80, height: 32 },
    { src: "/images/brands/br-3.svg", alt: "Brand 3", width: 80, height: 32 },
    { src: "/images/brands/br-4.svg", alt: "Brand 4", width: 80, height: 32 },
    { src: "/images/brands/br-5.svg", alt: "Brand 5", width: 80, height: 32 },
    { src: "/images/brands/br-6.svg", alt: "Brand 6", width: 80, height: 32 },
    { src: "/images/brands/br-7.svg", alt: "Brand 7", width: 80, height: 32 },
  ];

  return (
    <div className="wrapper">
      <div className="max-w-[1016px] relative z-30 mx-auto pt-14 pb-16">
        <p className="text-center text-gray-600 dark:text-white/60 text-sm sm:text-base font-semibold tracking-wide">
          Impulsando la prospección de equipos comerciales en toda Iberoamérica
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-14 mt-8">
          {logos.map((logo, index) => (
            <Image
              key={index}
              src={logo.src}
              alt={logo.alt}
              width={logo.width}
              height={logo.height}
              className="brightness-0 opacity-70 hover:opacity-100 dark:brightness-100 dark:opacity-40 transition-all duration-200"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
