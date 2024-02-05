import React from "react";
import Image from "next/image";
import Link from "next/link";

const FeatureCard = ({ imgURL, title, date, category, post }) => {
  return (
    <section className="flex md:flex-row sm:flex-col items-center ">
      <Link href="#">
        <div className="flex md:flex-row sm:flex-col md:w-[856px] sm:w-[344px] sm:h-[455px] md:h-[180px] md:hover:bg-slate-100 mt-5">
          <div className="md:w-[246px] md:h-[180px]">
            <Image width={339} height={238} src={imgURL} alt="feature" />
          </div>
          <div className="flex flex-col sm:pt-[17px] md:ml-5 ">
            <p className="text-[24px] text-[#21243D] font-bold">{title}</p>
            <div className="flex flex-row mt-[16px]">
              <button className="w-[62px] h-[25px] bg-[#142850] rounded-full">
                <span className=" text-[16px] font-bold text-white">
                  {date}
                </span>
              </button>
              <p className="text-[16px] text-[#8695A4] font-normal ml-[34px]">
                {category}
              </p>
            </div>
            <p className="text-[16px] text-[#8695A4] font-normal mt-[24px] sm:w-[344px] md:w-[594px] sm:h-[96px] md:h-[93px]">
              {post}
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="339"
              height="2"
              viewBox="0 0 339 2"
              fill="none"
              className="mt-[-8px] sm:block md:hidden"
            >
              <path d="M0 1L339 1.00003" stroke="#E0E0E0" />
            </svg>
            <div className="relative flex justify-end mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="858"
                height="2"
                viewBox="0 0 858 2"
                fill="none"
                className="absolute mt-[10px]  sm:hidden md:block "
              >
                <path d="M0 1L858 1.00008" stroke="#E0E0E0" />
              </svg>
            </div>
          </div>
        </div>
      </Link>
    </section>
  );
};

export default FeatureCard;
