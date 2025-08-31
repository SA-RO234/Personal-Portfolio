import React from "react";
import Title from "../components/Title";
import BlogContainer from "@/components/blog/BlogContainer";

const Blog = () => {
  return (
    <div id="blog">
      <Title title={"My Blog"} />
      <BlogContainer/>
    </div>
  );
};

export default Blog;
