import { Icon } from "@iconify/react";
import Image from "next/image";
import parse from "html-react-parser";

type Props = {
  imageUrl: string;
  caption: string;
  tags?: string[];
  id: string;
};

const PhotoModal = ({ imageUrl, caption, tags, id }: Props) => {
  return (
    <>
      <label htmlFor={`photoModal-${id}`} className="btn btn-sm lg:btn-md">
        Quick preview
      </label>

      <input type="checkbox" id={`photoModal-${id}`} className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative w-11/12 max-w-5xl">
          <label
            htmlFor={`photoModal-${id}`}
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            <Icon icon="ic:sharp-close" className="lg:w-6 lg:h-6 w-5 h-5" />
          </label>
          <div className="mt-7 lg:mt-5">
            <Image
              src={imageUrl}
              alt={caption}
              width={1280}
              height={720}
              className="rounded-xl lg:p-2 p-0"
            />
          </div>
          <div className="flex mt-2">
            <figcaption className="flex mt-2 text-white photo-caption">
              {parse(`${caption}`)}
            </figcaption>
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

export default PhotoModal;
