import { Post } from "@/types/endpoint";
import dayjs from "dayjs";
import "dayjs/locale/tr";

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

  return (
    <div className="flex flex-col mb-10">
      <div className="flex items-center bg-gradient-to-r from-pink-300 via-purple-300/80 to-transparent lg:w-1/3">
        <p
          className="text-white rotate-180 text-xl lg:text-2xl font-bold"
          style={{
            writingMode: "vertical-rl",
          }}
        >
          {weekdayName}
        </p>
        <div className="p-3 flex flex-col items-center ">
          <p className="text-xl lg:text-2xl font-bold">{dayOfMonth}</p>
          <p className="text-xs lg:text-sm font-bold">{monthName}</p>
        </div>
      </div>
      <div className="mt-5">
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
