import { useAtom } from "jotai/react";
import { titleAtom } from "@/store/titleAtom";

const Navbar = () => {
  const [title] = useAtom(titleAtom);
  return (
    <nav className="w-full">
      <h1 className="text-white text-3xl font-bold uppercase">{title}</h1>
      <div className="w-full h-1 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 mt-3 mb-5" />
    </nav>
  );
};

export default Navbar;
