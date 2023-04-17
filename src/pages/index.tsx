import { Root, Tumblelog } from "@/types/endpoint";
import { useEffect } from "react";

import { useAtom } from "jotai";
import { titleAtom } from "@/store/titleAtom";

import { BlogInfo } from "@/components";
import { groupByDate } from "@/utils/groupByDate";

export const getServerSideProps = async () => {
  const response = await fetch("https://demo.tumblr.com/api/read/json");

  //! conversion of var tumblr_api_read to JSON
  const text = await response.text();
  const jsonStart = text.indexOf("{");
  const jsonEnd = text.lastIndexOf("}");
  const jsonString = text.substring(jsonStart, jsonEnd + 1);
  const tumblr_api_read = JSON.parse(jsonString) as Root;

  const { tumblelog, posts } = tumblr_api_read;

  const groupedPostsByDate = groupByDate(posts);

  return {
    props: {
      blog: tumblelog,
      posts: groupedPostsByDate,
    },
  };
};

export default function Home({
  blog,
  posts,
}: {
  blog: Tumblelog;
  posts: { [key: string]: typeof posts };
}) {
  console.log(posts);
  const [, setTitle] = useAtom(titleAtom);
  useEffect(() => {
    setTitle(blog.title);
  }, []);
  return (
    <main className="flex w-full">
      {/* Left */}
      <section className="flex-[3]">Left</section>
      {/* Right */}
      <section className="flex-[1]">
        <BlogInfo description={blog.description} />
      </section>
    </main>
  );
}
