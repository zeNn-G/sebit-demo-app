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
        <p>Modal</p>
        <a href={post["url-with-slug"]} target="_blank">
          <Icon
            icon="system-uicons:chain"
            className="w-6 h-6 text-purple-400 cursor-pointer"
          />
        </a>
      </div>
      <div className="text-center">
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
    </figure>
  );
};

export default QuotePost;
