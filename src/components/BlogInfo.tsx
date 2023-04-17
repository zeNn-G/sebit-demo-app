import { useAtom } from "jotai/react";
import { titleAtom } from "@/store/titleAtom";

type Props = {
  description: string;
};

const BlogInfo = ({ description }: Props) => {
  const [title] = useAtom(titleAtom);
  return (
    <div className="p-4 rounded-xl bg-slate-500/10 h-fit">
      <h1 className="text-xl font-bold text-gray-500 mb-2">About {title}</h1>
      <p className="text-slate-100">{description}</p>
    </div>
  );
};

export default BlogInfo;
