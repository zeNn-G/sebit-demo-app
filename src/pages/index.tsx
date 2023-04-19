import { Tumblelog } from "@/types/endpoint";
import { useEffect } from "react";

import { useAtom } from "jotai";
import { titleAtom } from "@/store/titleAtom";

import { BlogInfo, DateWithPosts } from "@/components";
import { SearchBar } from "@/components/";

import { type groupedDate, groupByDate } from "@/utils/groupByDate";

import { textToJson } from "@/utils/textToJson";

import Head from "next/head";

export const getServerSideProps = async () => {
  const response = await fetch("https://demo.tumblr.com/api/read/json");

  //! conversion of var tumblr_api_read to JSON
  const text = await response.text();
  const tumblr_api_read = textToJson(text);

  const { tumblelog, posts } = tumblr_api_read;

  const groupedPostsByDate = groupByDate(posts);

  return {
    props: {
      blog: tumblelog,
      totalPosts: posts.length,
      posts: groupedPostsByDate,
    },
  };
};

type Props = {
  blog: Tumblelog;
  posts: groupedDate[];
  totalPosts: number;
};

export default function Home({ blog, posts, totalPosts }: Props) {
  const [, setTitle] = useAtom(titleAtom);
  useEffect(() => {
    setTitle(blog.title);
  }, []);

  return (
    <main className="flex w-full lg:flex-row flex-col-reverse">
      <Head>
        <title>{blog.title}</title>
      </Head>
      {/* Left */}
      <section className="lg:flex-[3] flex flex-col mr-2">
        {posts.map((post, i) => (
          <DateWithPosts
            key={i}
            day={post.day}
            month={post.month}
            year={post.year}
            posts={post.posts}
          />
        ))}
      </section>
      {/* Right */}
      <section className="flex-[1]">
        <BlogInfo description={blog.description} postTotal={totalPosts} />
      </section>
      <div className="lg:hidden">
        <SearchBar />
      </div>
    </main>
  );
}
