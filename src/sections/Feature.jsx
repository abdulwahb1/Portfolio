import FeatureCard from "@/components/Feature/FeatureCard";
import { features } from "@/constants";

const Feature = () => {
  return (
    <section className="flex flex-col items-center pt-5">
      <p className="text-[18px] font-normal text-[#21243D]">Featured Works</p>
      <div className="">
        {features.map((feature) => (
          <FeatureCard key={feature.name} {...feature} />
        ))}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="339"
          height="2"
          viewBox="0 0 339 2"
          fill="none"
          className="mt-[17px]"
        >
          <path d="M0 1L339 1.00003" stroke="#E0E0E0" />
        </svg>
      </div>
    </section>
  );
};

export default Feature;
