import { useAtom } from "jotai/react";
import { titleAtom } from "@/store/titleAtom";

type Props = {
  description: string;
  postTotal: number;
};

const BlogInfo = ({ description, postTotal }: Props) => {
  const [title] = useAtom(titleAtom);
  return (
    <div className="p-4 rounded-xl h-fit mb-5 mt-2 lg:mb-0 lg:mt-0">
      <h1 className="text-xl font-bold mb-2 text-primary">About {title}</h1>
      <p className="text-slate-100">{description}</p>
      <p className="text-purple-400 mt-2 font-semibold">
        Post Count : {postTotal}{" "}
      </p>
      <div className="btn w-full mt-3">Archive</div>
    </div>
  );
};

export default BlogInfo;
