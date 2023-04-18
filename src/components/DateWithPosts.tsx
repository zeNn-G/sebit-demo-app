import { Post } from "@/types/endpoint";
import dayjs from "dayjs";
import "dayjs/locale/tr";

import { Nunito } from "next/font/google";

const nunito = Nunito({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

import {
  AudioPost,
  ConversationPost,
  LinkPost,
  PhotoPost,
  QuotePost,
  RegularPost,
} from "@/components/Posts";

type Props = {
  day: number;
  month: number;
  year: number;
  posts: Post[];
};

const DateWithPosts = ({ day, month, year, posts }: Props) => {
  const fullDate = dayjs(`${year}-${month}-${day}`);

  const dayOfMonth = fullDate.format("DD");
  const monthName = fullDate.locale("tr").format("MMM");
  const weekdayName = fullDate.locale("tr").format("ddd");
  const yearName = fullDate.format("YYYY");

  return (
    <div className="flex flex-col mb-10">
      <div
        className={`flex items-center justify-between bg-base-300 lg:p-2 p-1.5 rounded-xl ${nunito.className}`}
      >
        <div className="flex flex-row items-center bg-primary rounded-xl">
          <p
            className="text-white rotate-180 text-xl lg:text-2xl font-bold p-1.5"
            style={{
              writingMode: "vertical-rl",
            }}
          >
            {weekdayName}
          </p>
          <div className="p-1.5 flex flex-col items-center justify-center">
            <p className="text-xl lg:text-2xl font-bold">{dayOfMonth}</p>
            <p className="text-xs lg:text-sm font-bold">{monthName}</p>
          </div>
        </div>
        <div className="rounded-xl">
          <p className="text-lg lg:text-xl font-bold">{yearName}</p>
        </div>
      </div>
      <div className="mt-5 flex">
        <div className="hidden lg:flex divider divider-horizontal w-fit bg-gradient-to-b from-pink-300 via-purple-300 to-indigo-400" />
        <div className="flex flex-col gap-10">
          {posts.map((post, i) => {
            if (post.type === "audio") {
              return <AudioPost post={post} key={i} />;
            } else if (post.type === "conversation") {
              return <ConversationPost post={post} key={i} />;
            } else if (post.type === "photo") {
              return <PhotoPost post={post} key={i} />;
            } else if (post.type === "link") {
              return <LinkPost post={post} key={i} />;
            } else if (post.type === "quote") {
              return <QuotePost post={post} key={i} />;
            } else {
              return <RegularPost post={post} key={i} />;
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default DateWithPosts;
