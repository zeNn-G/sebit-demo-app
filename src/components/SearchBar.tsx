import { Icon } from "@iconify/react";
import { useState } from "react";

type Props = {};

const SearchBar = (props: Props) => {
  const [search, setSearch] = useState<string>("");
  return (
    <label className="relative block ">
      <input
        className="input input-bordered input-md w-full"
        type="text"
        value={search}
        placeholder="No Logic"
        onChange={(e) => setSearch(e.target.value)}
      />

      <span className="absolute inset-y-0 right-0 flex items-center pr-3">
        <Icon icon="akar-icons:search" className="w-4 h-4 text-gray-400" />
      </span>
    </label>
  );
};

export default SearchBar;
