import { Post } from "@/types/endpoint";
import { Icon } from "@iconify/react";
import Image from "next/image";
import parse from "html-react-parser";

type Props = {
  post: Post;
};

const PhotoPost = ({ post }: Props) => {
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
        <a href={post["photo-url-1280"]} target="_blank">
          <Image
            src={post["photo-url-1280"]!}
            alt={post["photo-caption"]!}
            width={1280}
            height={720}
            className="rounded-xl"
          />
        </a>
        <figcaption className="flex mt-6 text-white photo-caption">
          {parse(`${post["photo-caption"]}`)}
        </figcaption>
      </div>
    </figure>
  );
};

export default PhotoPost;
