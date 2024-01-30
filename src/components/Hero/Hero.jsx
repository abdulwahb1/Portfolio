import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="flex md:flex-row sm:flex-col sm:justify-center sm:items-center ">
      <div className="flex md:order-last md:ml-[20px]">
        <Image
          src="/hero.png"
          width={170}
          height={170}
          alt="hero"
          className="absolute md:w-[243px] md:h-[243px]"
        />
        <svg
          width="171"
          height="171"
          viewBox="0 0 171 171"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="sm:ml-[-5px] md:w-[243px] md:h-[243px]"
        >
          <circle cx="85.4297" cy="85.5703" r="85.4297" fill="#EDF7FA" />
        </svg>
      </div>
      <div className="flex flex-col justify-center md:items-start sm:items-center mt-[43px] md:text-start sm:text-center">
        <h1 className=" font-sans md:text-[44px] sm:text-[32px] text-[#21243D] md:w-[506px] sm:w-[312px] font-semibold">
          Hi, I am Abdul, <br /> Full Stack Developer
        </h1>
        <p className="font-sans text-[16px]  text-[#21243D] w-[328px] tracking-normal mt-[21px] font-medium">
          I am a Full Stack Developer with 2+ years of experience in developing
          web applications using React, Next.js, Node.js, Express.js, MongoDB,
          PostgreSQL, and Firebase.
        </p>
        <button className="w-[208px] h-[47px] rounded-full bg-[#FF6464] mt-[27px]">
          <span className="text-white text-[20px] font-semibold">
            Download Resume
          </span>
        </button>
      </div>
    </section>
  );
};

export default Hero;
