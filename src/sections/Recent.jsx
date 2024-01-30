import { recents } from "../constants";
import RecentCard from "../components/Recent/RecentCard";

const Recent = () => {
  return (
    <section className="flex flex-col md:w-[1152px] sm:w-[400px] md:h-[396px] sm:h-[647px] bg-[#EDF7FA] mt-[58px] md:items-start md:pl-[148px] sm:items-center sm:justify-center md:justify-start">
      <p className="md:text-[22px] sm:text-[18px] font-medium text-[#21243D] sm:mt-[20px] md:ml-3">
        Recent post
      </p>
      <div className="md:flex-row flex sm:flex-col">
        {recents.map((recent) => (
          <RecentCard key={recent.name} {...recent} />
        ))}
      </div>
    </section>
  );
};

export default Recent;
