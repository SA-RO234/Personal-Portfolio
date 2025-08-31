import React from "react";
import Title from "../components/Title";
import BlogContainer from "@/components/blog/BlogContainer";

const Blog = () => {
  return (
    <div id="blog" className="w-[90%] mx-auto">
      <Title title={"My Blog"} />
      <BlogContainer/>
    </div>
  );
};

export default Blog;
