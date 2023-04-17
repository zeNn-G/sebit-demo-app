import { useAtom } from "jotai/react";
import { titleAtom } from "@/store/titleAtom";

const Navbar = () => {
  const [title] = useAtom(titleAtom);
  return (
    <div className="p-5">
      <div>{title}</div>
    </div>
  );
};

export default Navbar;
