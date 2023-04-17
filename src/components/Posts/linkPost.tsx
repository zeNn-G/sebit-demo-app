import { Post } from "@/types/endpoint";
import { Icon } from "@iconify/react";
import parse from "html-react-parser";

type Props = {
  post: Post;
};

const LinkPost = ({ post }: Props) => {
  console.log(post["link-text"]);
  console.log(post["link-description"]);
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
      <div className="mt-2">
        <a href={post["link-url"]} target="_blank">
          <p className="text-xl text-purple-400 underline">
            {post["link-text"]}
          </p>
        </a>
        <figcaption className="flex mt-6 text-white photo-caption">
          {parse(`${post["link-description"]}`)}
        </figcaption>
      </div>
    </figure>
  );
};

export default LinkPost;
