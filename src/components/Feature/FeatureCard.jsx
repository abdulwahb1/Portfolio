import React from "react";
import Image from "next/image";

const FeatureCard = ({ imgURL, title, date, category, post }) => {
  return (
    <section className="flex flex-col items-center pt-5">
      <div className="flex flex-col w-[344px] h-[455px] pt-5">
        <Image src={imgURL} width={339} height={238} alt="feature" />
        <div className="flex flex-col pt-[17px]">
          <p className="text-[24px] text-[#21243D] font-bold">{title}</p>
          <div className="flex flex-row mt-[16px]">
            <button className="w-[62px] h-[25px] bg-[#142850] rounded-full">
              <span className=" text-[16px] font-bold text-white">{date}</span>
            </button>
            <p className="text-[16px] text-[#8695A4] font-normal ml-[34px]">
              {category}
            </p>
          </div>
          <p className="text-[16px] text-[#8695A4] font-normal mt-[24px]">
            {post}
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeatureCard;
