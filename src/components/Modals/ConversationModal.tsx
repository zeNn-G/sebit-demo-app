import { Icon } from "@iconify/react";
import { Conversation } from "@/types/endpoint";

type Props = {
  conversation: Conversation[];
  title: string;
  tags?: string[];
  id: string;
};

const ConversationModal = ({ conversation, title, tags, id }: Props) => {
  return (
    <>
      <label
        htmlFor={`conversationModal-${id}`}
        className="btn btn-sm lg:btn-md"
      >
        Quick preview
      </label>

      <input
        type="checkbox"
        id={`conversationModal-${id}`}
        className="modal-toggle"
      />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor={`conversationModal-${id}`}
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            <Icon icon="ic:sharp-close" className="lg:w-6 lg:h-6 w-5 h-5" />
          </label>
          {title && <h3 className="mt-2">{title}</h3>}

          <div className="mt-7">
            <ul className="w-full">
              {conversation.map(({ label, phrase }, index) => (
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
          </div>
          {tags?.length ? (
            <div className="hidden lg:flex justify-end mt-3 gap-2">
              {tags!.map((tag, i) => (
                <div
                  key={i}
                  className="p-1.5 bg-accent rounded-xl text-black text-sm"
                >
                  #{tag}
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default ConversationModal;
