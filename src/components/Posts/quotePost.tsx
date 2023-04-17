import { Post } from "@/types/endpoint";
import { Icon } from "@iconify/react";
import parse from "html-react-parser";

type Props = {
  post: Post;
};

const QuotePost = ({ post }: Props) => {
  return (
    <figure className="max-w-screen-md mx-auto text-center bg-postBg p-5 rounded-lg">
      <Icon
        icon="material-symbols:format-quote"
        className="w-12 h-12 mx-auto mb-3 text-gray-400"
      />

      <blockquote>
        <p className="text-2xl font-bold text-white mb-3 italic">
          "{post["quote-text"]}"
        </p>
      </blockquote>
      <figcaption className="flex items-center justify-center mt-6 space-x-3">
        <p className="text-white">{parse(`${post["quote-source"]}`)}</p>
      </figcaption>
    </figure>
  );
};

export default QuotePost;
