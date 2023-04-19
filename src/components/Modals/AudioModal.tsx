import { Icon } from "@iconify/react";
import parse from "html-react-parser";

type Props = {
  src: string;
  caption: string;
  tags?: string[];
  id: string;
};

const AudioModal = ({ caption, src, tags, id }: Props) => {
  return (
    <>
      <label htmlFor={`audioModal-${id}`} className="btn btn-sm lg:btn-md">
        Quick preview
      </label>

      <input type="checkbox" id={`audioModal-${id}`} className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor={`audioModal-${id}`}
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            <Icon icon="ic:sharp-close" className="lg:w-6 lg:h-6 w-5 h-5" />
          </label>
          <div className="mt-8">
            <iframe
              width={"100%"}
              height={"85"}
              className="rounded-lg overflow-hidden mt-2"
              src={src}
            />
          </div>
          <div className="mt-6 audio-caption">{parse(`${caption}`)}</div>
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
    </>
  );
};

export default AudioModal;
