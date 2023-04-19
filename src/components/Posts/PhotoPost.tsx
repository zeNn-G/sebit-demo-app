import { Post } from "@/types/endpoint";
import { Icon } from "@iconify/react";
import Image from "next/image";
import parse from "html-react-parser";
import { PhotoModal } from "../Modals";

type Props = {
  post: Post;
};

const PhotoPost = ({ post }: Props) => {
  return (
    <figure className="max-w-screen-md mx-auto flex flex-col bg-postBg p-5 rounded-lg">
      <div className="flex justify-between items-center">
        <PhotoModal
          imageUrl={post["photo-url-1280"]!}
          caption={post["photo-caption"]!}
          tags={post.tags}
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
        <a href={post["photo-url-1280"]} target="_blank">
          <Image
            src={post["photo-url-1280"]!}
            alt={post["photo-caption"]!}
            width={1280}
            height={720}
            className="lg:rounded-xl rounded-lg"
          />
        </a>
        <figcaption className="flex mt-6 text-white photo-caption">
          {parse(`${post["photo-caption"]}`)}
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

export default PhotoPost;
