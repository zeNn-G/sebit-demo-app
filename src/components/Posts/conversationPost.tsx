import { Post } from "@/types/endpoint";
import { Icon } from "@iconify/react";
type Props = {
  post: Post;
};

const ConversationPost = ({ post }: Props) => {
  const conversation = post.conversation;

  return (
    <figure className="max-w-screen-md mx-auto flex flex-col bg-postBg p-5 rounded-lg w-full">
      <div className="flex justify-between items-center">
        <p>Modal</p>
        <a href={post["url-with-slug"]} target="_blank">
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
                className="odd:bg-purple-400/20 even:bg-purple-400/10 p-2 rounded-lg mb-2"
              >
                <div className="flex items-center">
                  <span className="text-white">
                    <span
                      className={`${
                        index % 2 !== 0 ? "text-[#84fc8d]" : "text-[#ff8c8c]"
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
    </figure>
  );
};

export default ConversationPost;
