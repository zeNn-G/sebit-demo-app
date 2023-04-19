import { Icon } from "@iconify/react";
import parse from "html-react-parser";

type Props = {
  title: string;
  body: string;
  tags?: string[];
  id: string;
};

const RegularPostModal = ({ title, body, tags, id }: Props) => {
  return (
    <>
      <label htmlFor={`regularPost-${id}`} className="btn btn-sm lg:btn-md">
        Quick preview
      </label>

      <input
        type="checkbox"
        id={`regularPost-${id}`}
        className="modal-toggle"
      />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor={`regularPost-${id}`}
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            <Icon icon="ic:sharp-close" className="lg:w-6 lg:h-6 w-5 h-5" />
          </label>
          <h3 className="text-lg font-bold">{title}</h3>
          <div className="mt-8 regular-body">{parse(`${body}`)}</div>
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

export default RegularPostModal;
