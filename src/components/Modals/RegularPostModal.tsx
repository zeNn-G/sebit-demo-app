import { Icon } from "@iconify/react";
import parse from "html-react-parser";

type Props = {
  title: string;
  body: string;
};

const RegularPostModal = ({ title, body }: Props) => {
  return (
    <>
      <label
        htmlFor={`${title}-regularPostModal`}
        className="btn btn-sm lg:btn-md"
      >
        Quick preview
      </label>

      <input
        type="checkbox"
        id={`${title}-regularPostModal`}
        className="modal-toggle"
      />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor={`${title}-regularPostModal`}
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            <Icon icon="ic:sharp-close" className="lg:w-6 lg:h-6 w-5 h-5" />
          </label>
          <h3 className="text-lg font-bold">{title}</h3>
          <div className="mt-8 regular-body">{parse(`${body}`)}</div>
        </div>
      </div>
    </>
  );
};

export default RegularPostModal;
