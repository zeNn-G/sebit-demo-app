import { Post } from "@/types/endpoint";
import { Icon } from "@iconify/react";
import parse from "html-react-parser";
import { QuoteModal } from "../Modals";

type Props = {
  post: Post;
};

const QuotePost = ({ post }: Props) => {
  return (
    <figure className="max-w-screen-md mx-auto flex flex-col bg-postBg p-5 rounded-lg">
      <div className="flex justify-between items-center">
        <QuoteModal
          quoteText={post["quote-text"]!}
          quoteSource={post["quote-source"]!}
          tags={post.tags}
          id={post.id}
        />
        <a
          href={post["url-with-slug"]}
          target="_blank"
          className="btn btn-circle"
        >
          <Icon
            icon="system-uicons:chain"
            className="w-6 h-6 text-purple-400 cursor-pointer"
          />
        </a>
      </div>
      <div className="text-center lg:mt-2 mt-5">
        <Icon
          icon="material-symbols:format-quote"
          className="w-12 h-12 mx-auto mb-3 text-gray-400"
        />

        <blockquote>
          <p className="text-2xl font-bold text-white mb-3 italic">
            "{post["quote-text"]}"
          </p>
        </blockquote>
        <figcaption className="flex items-center justify-center mt-6 space-x-3 ">
          <p className="text-white source-text">
            {parse(`${post["quote-source"]}`)}
          </p>
        </figcaption>
      </div>
      {post.tags?.length ? (
        <div className="hidden lg:flex justify-end mt-3 gap-2">
          {post.tags!.map((tag, i) => (
            <div
              key={i}
              className="p-1.5 bg-accent rounded-xl text-black text-sm"
            >
              #{tag}
            </div>
          ))}
        </div>
      ) : null}
    </figure>
  );
};

export default QuotePost;
