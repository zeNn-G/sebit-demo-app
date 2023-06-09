import { Post } from "@/types/endpoint";
import { Icon } from "@iconify/react";
import parse from "html-react-parser";
import { RegularPostModal } from "../Modals";

type Props = {
  post: Post;
};

const RegularPost = ({ post }: Props) => {
  return (
    <figure className="max-w-screen-md mx-auto flex flex-col bg-postBg p-5 rounded-lg">
      <div className="flex justify-between items-center">
        <RegularPostModal
          title={post["regular-title"]!}
          body={post["regular-body"]!}
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
      <div className="lg:mt-2 mt-5">
        {post["regular-title"] && (
          <h1 className="text-2xl font-bold text-white mb-3">
            {post["regular-title"]}
          </h1>
        )}
        <div className="text-white regular-body">
          {parse(`${post["regular-body"]}`)}
        </div>
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

export default RegularPost;
