import FeatureCard from "@/components/Feature/FeatureCard";
import { features } from "@/constants";

const Feature = () => {
  return (
    <section
      className="flex flex-col md:items-start sm:items-center pt-5 "
      id="work"
    >
      <p className="text-[18px] font-normal text-[#21243D] ml-3">
        Featured Works
      </p>
      <div className="pt-10">
        {features.map((feature) => (
          <FeatureCard key={feature.id} {...feature} />
        ))}
      </div>
    </section>
  );
};

export default Feature;
