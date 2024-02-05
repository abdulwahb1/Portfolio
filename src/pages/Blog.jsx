import { Footer, Navbar } from "@/components";
import BlogCard from "@/components/BlogCard/BlogCard";
import { blogs } from "@/constants";

const Blog = () => {
  return (
    <section className="flex flex-col md:w-[1152px] sm:w-full md:justify-start md:items-start sm:justify-center md:ml-[235px]  sm:mt-[18px]">
      <div className="flex justify-center items-center">
        <h1 className="font-bold md:text-[44px] sm:text-[30px] sm:ml-[30px]">
          Blog
        </h1>
      </div>
      <div className="flex-col flex sm:items-center sm:w-full">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} {...blog} />
        ))}
      </div>
    </section>
  );
};

export default Blog;
