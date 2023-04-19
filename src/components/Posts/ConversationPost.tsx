import { Post } from "@/types/endpoint";
import { Icon } from "@iconify/react";
import { ConversationModal } from "../Modals";

type Props = {
  post: Post;
};

const ConversationPost = ({ post }: Props) => {
  const conversation = post.conversation;

  return (
    <figure className="max-w-screen-md mx-auto flex flex-col bg-postBg p-5 rounded-lg w-full">
      <div className="flex justify-between items-center">
        <ConversationModal
          conversation={conversation!}
          title={post["conversation-title"]}
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
      {post["conversation-title"] && (
        <div className="mt-2">{post["conversation-title"]}</div>
      )}
      <div className="mt-2 p-2">
        <figcaption className="flex items-center justify-center mt-6">
          <ul className="w-full">
            {conversation!.map(({ label, phrase }, index) => (
              <li
                key={index}
                className="odd:bg-primary/20 even:bg-accent/10 p-2 rounded-lg mb-2"
              >
                <div className="flex items-center">
                  <span className="text-white">
                    <span
                      className={`${
                        index % 2 !== 0 ? "text-primary" : "text-accent"
                      } mr-2`}
                    >
                      {label}
                    </span>
                    {phrase}
                  </span>
                </div>
              </li>
            ))}
          </ul>
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

export default ConversationPost;
