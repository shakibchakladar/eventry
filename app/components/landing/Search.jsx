"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";

function Search() {
  const searchParams = useSearchParams();
  const pathName=usePathname();
  const {replace}=useRouter();
  function handleSearch(term) {
    const params = URLSearchParams(searchParams);
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
  }
  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        className="bg-[#27292F] border border-[#CCCCCC]/20 py-1 px-2 rounded-md"
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
      />
    </div>
  );
}

export default Search;
