import { useAtom } from "jotai/react";
import { titleAtom } from "@/store/titleAtom";

import SearchBar from "./SearchBar";

const Navbar = () => {
  const [title] = useAtom(titleAtom);
  return (
    <nav className="w-full pt-5 ${exo_2.className}">
      <div className="flex justify-between items-center">
        <h1 className="text-white text-3xl font-bold">{title}</h1>
        <div className="hidden lg:flex">
          <SearchBar />
        </div>
      </div>
      <div className="w-full h-1 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 mt-3 mb-5" />
    </nav>
  );
};

export default Navbar;
