import { Post } from "@/types/endpoint";
import { Icon } from "@iconify/react";
import parse from "html-react-parser";
import { LinkModal } from "../Modals";

type Props = {
  post: Post;
};

const LinkPost = ({ post }: Props) => {
  return (
    <figure className="max-w-screen-md mx-auto flex flex-col bg-postBg p-5 rounded-lg">
      <div className="flex justify-between items-center">
        <LinkModal
          linkUrl={post["link-url"]!}
          linkDesc={post["link-description"]!}
          linkText={post["link-text"]!}
          tags={post.tags!}
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
      <div className="lg:mt-2 mt-5">
        <a href={post["link-url"]} target="_blank">
          <p className="text-xl text-purple-400 underline">
            {post["link-text"]}
          </p>
        </a>
        <figcaption className="flex mt-6 text-white photo-caption">
          {parse(`${post["link-description"]}`)}
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

export default LinkPost;
