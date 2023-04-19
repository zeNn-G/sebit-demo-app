import parse from "html-react-parser";
import { Icon } from "@iconify/react";

type Props = {
  quoteText: string;
  quoteSource: string;
  tags?: string[];
  id: string;
};

const QuoteModal = ({ quoteSource, quoteText, tags, id }: Props) => {
  return (
    <>
      <label htmlFor={`quoteModal-${id}`} className="btn btn-sm lg:btn-md">
        Quick preview
      </label>

      <input type="checkbox" id={`quoteModal-${id}`} className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor={`quoteModal-${id}`}
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            <Icon icon="ic:sharp-close" className="lg:w-6 lg:h-6 w-5 h-5" />
          </label>
          <h3 className="text-lg font-bold">
            <Icon
              icon="material-symbols:format-quote"
              className="w-12 h-12 mx-auto mb-3 text-gray-400"
            />
          </h3>
          <p className="text-2xl font-bold text-white mb-3 italic py-4">
            "{quoteText}"
          </p>
          <div className="flex items-center justify-center mt-6 ">
            <p className="text-white source-text">{parse(`${quoteSource}`)}</p>
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

export default QuoteModal;
