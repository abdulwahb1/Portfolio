import Link from "next/link";

const BlogCard = ({ title, post, date, category }) => {
  return (
    <section className="flex flex-col justify-center items-center  ">
      <div className="flex flex-col md:w-[682px] sm:w-[339px] md:h-[132px] sm:h-[204px] mt-10">
        <p className="md:text-[30px] sm:text-[26px] font-bold leading-[30px] text-[#21243D]">
          <Link href="#" className="hover:text-blue-900">
            {title}
          </Link>
        </p>
        <div className="flex flex-row mt-[15px]">
          <p className="md:text-[18px] sm:text-[16px] font-normal text-[#21243D] ">
            {date}
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2"
            height="21"
            viewBox="0 0 2 21"
            fill="none"
            className="ml-[24px] mr-[24px] mt-[3px]"
          >
            <path d="M1 0V21" stroke="black" />
          </svg>
          <p className="md:text-[18px] sm:text-[16px] font-normal text-[#21243D]">
            {" "}
            {category}
          </p>
        </div>
        <p className="text-[16px] font-normal text-[#21243D] md:w-[682px] sm:w-[339px] mt-[15px]">
          {post}
        </p>
      </div>
      <svg
        width="681"
        height="2"
        viewBox="0 0 681 2"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mt-[30px] sm:hidden md:block"
      >
        <path d="M0 1H681" stroke="#E0E0E0" />
      </svg>
      <svg
        width="339"
        height="2"
        viewBox="0 0 339 2"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="sm:block md:hidden"
      >
        <path d="M0 1H339" stroke="#E0E0E0" />
      </svg>
    </section>
  );
};

export default BlogCard;
