import Link from "next/link";

const RecentCard = ({ title, post, date, category }) => {
  return (
    <section className="flex justify-center items-center ml-3 ">
      <div className="flex flex-col md:w-[418px] sm:w-[354px] md:h-[295px] sm:h-[266px] bg-white shadow-sm pl-[19px] mt-[20px] justify-evenly">
        <p className="md:text-[26px] sm:text-[22px] font-bold leading-[30px] text-[#21243D]">
          <Link href="#" className="hover:text-blue-900">
            {title}
          </Link>
        </p>
        <div className="flex flex-row">
          <p className="md:text-[18px] sm:text-[16px] font-normal text-[#21243D]">
            {date}
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2"
            height="21"
            viewBox="0 0 2 21"
            fill="none"
            className="ml-[24px] mr-[24px]"
          >
            <path d="M1 0V21" stroke="black" />
          </svg>
          <p className="md:text-[18px] sm:text-[16px] font-normal text-[#21243D]">
            {" "}
            {category}
          </p>
        </div>
        <p className="text-[16px] font-normal text-[#21243D] w-[314px]">
          {post}
        </p>
      </div>
    </section>
  );
};

export default RecentCard;
