import { Icon } from "@iconify/react";
import parse from "html-react-parser";

type Props = {
  linkUrl: string;
  linkDesc: string;
  linkText: string;
  tags?: string[];
};

const LinkModal = ({ linkUrl, linkDesc, linkText, tags }: Props) => {
  return (
    <>
      <label htmlFor="linkModal" className="btn btn-sm lg:btn-md">
        Quick preview
      </label>

      <input type="checkbox" id="linkModal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="linkModal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            <Icon icon="ic:sharp-close" className="lg:w-6 lg:h-6 w-5 h-5" />
          </label>
          <h3 className="text-lg font-bold">
            <p>{linkText}</p>
          </h3>
          <div className="py-4">{parse(`${linkDesc}`)}</div>
          <div className="modal-action">
            <a href={linkUrl} target="_blank" className="btn">
              Visit link
            </a>
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

export default LinkModal;
