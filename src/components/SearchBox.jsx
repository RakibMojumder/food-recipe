"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { GoSearch } from "react-icons/go";

const SearchBox = () => {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState("");

  return (
    <div>
      <div className="h-8 flex items-center">
        <input
          type="text"
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Search Here"
          className="py-1 pl-3 h-full rounded-l border rounded-r-none bg-neutral-100 focus:outline-none focus:border-primary placeholder:text-sm"
        />
        <button
          onClick={() => router.push(`/search?value=${searchValue}`)}
          className="h-full w-10 bg-primary rounded-r border-primary border border-l-0 flex justify-center items-center"
        >
          <GoSearch size={20} />
        </button>
      </div>
    </div>
  );
};

export default SearchBox;
