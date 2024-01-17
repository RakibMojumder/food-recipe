"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { GoSearch } from "react-icons/go";
import { RxCross2 } from "react-icons/rx";

const SearchBox = ({ className }) => {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className={`h-8 items-center ${className}`}>
      <div className="relative">
        <input
          type="text"
          value={searchValue}
          placeholder="Search Here"
          onChange={(e) => setSearchValue(e.target.value)}
          className="py-1.5 pl-3 h-full rounded-l w-full sm:w-auto border rounded-r-none bg-neutral-100 focus:outline-none focus:border-primary placeholder:text-sm"
        />
        {searchValue && (
          <RxCross2
            size={18}
            onClick={() => setSearchValue("")}
            className="absolute top-2 right-3 text-neutral-600 cursor-pointer"
          />
        )}
      </div>
      <button
        onClick={() => router.push(`/search?value=${searchValue}`)}
        className="h-full w-10 bg-primary rounded-r border-primary border border-l-0 flex justify-center items-center"
      >
        <GoSearch size={20} />
      </button>
    </div>
  );
};

export default SearchBox;
