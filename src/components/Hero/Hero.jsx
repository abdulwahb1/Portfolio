import React from "react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="flex md:flex-row sm:flex-col sm:justify-center sm:items-center md:w-[856px] sm:w-[400px] md:justify-between">
      <div className="flex md:order-last md:mr-[-20px]">
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
      <div className="flex flex-col  sm:justify-center md:items-start sm:items-center mt-[43px] md:text-start sm:text-center md:ml-1">
        <h1 className=" font-sans md:text-[44px] sm:text-[32px] text-[#21243D] md:w-[506px] sm:w-[312px] font-semibold md:ml-[-5px]">
          Hi, I am Abdul, <br /> Full Stack Developer
        </h1>
        <p className="font-sans text-[16px]  text-[#21243D] w-[328px] tracking-normal mt-[21px] font-medium">
          I am a Full Stack Developer with 2+ years of experience in developing
          web applications using React, Next.js, Node.js, Express.js, MongoDB,
          PostgreSQL, and Firebase.
        </p>
        <button className="w-[208px] h-[47px] rounded-full bg-[#FF6464] mt-[27px] md:ml-[-5px]">
          <span className="text-white text-[20px] font-semibold">
            <Link
              href="https://profile-api-prod.s3.us-west-2.amazonaws.com/438325846_8a016dc6-3b29-49d7-97e9-4e4a6bc10dee?response-content-disposition=attachment%3Bfilename%3DAbdul%2520Wahab.pdf&response-content-type=application%2Fpdf&X-Amz-Amdorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240131T141200Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=AKIAZKXXDXTXZF2KYWCD%2F20240131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=1d122c5b129efc0f63025a47d6fc72eca2ccf246ca1dc93bb6b42cffd13ebace"
              download
              target="_blank"
            >
              Download Resume
            </Link>
          </span>
        </button>
      </div>
    </section>
  );
};

export default Hero;
