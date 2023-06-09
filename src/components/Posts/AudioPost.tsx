import { Post } from "@/types/endpoint";
import { Icon } from "@iconify/react";
import parse from "html-react-parser";
import { AudioModal } from "../Modals";

type Props = {
  post: Post;
};

const AudioPost = ({ post }: Props) => {
  const iframe = post["audio-player"];
  const iframeSrc = iframe?.match(/src="([^"]+)"/)?.[1];

  return (
    <figure className="max-w-screen-md mx-auto flex flex-col bg-postBg p-5 rounded-lg w-full">
      <div className="flex justify-between items-center">
        <AudioModal
          src={iframeSrc!}
          caption={post["audio-caption"]!}
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
        <iframe
          width={"100%"}
          height={"85"}
          className="rounded-lg overflow-hidden mt-2"
          src={iframeSrc}
        />
      </div>
      <div className="mt-6 audio-caption">
        {parse(`${post["audio-caption"]}`)}
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

export default AudioPost;
