import { AiFillCaretDown, AiOutlineCheck } from "react-icons/ai";
import Link from "next/link";
import Button from "./button";
import { useState } from "react";

export const SortButton = () => {
  const [isSortClicked, setIsSortClicked] = useState(false);

  return (
    <div className="relative w-full md:w-auto">
      <Button
        onclick={() => setIsSortClicked(!isSortClicked)}
        normal
        title="Sort"
        icon={AiFillCaretDown}
      />
      <ul
        className={`${
          isSortClicked ? "block" : "hidden"
        } absolute top-[100%] w-full left-0 z-20 bg-white py-1 shadow-sm border border-[rgba(0,0,0,.15)] rounded-md`}
      >
        <li className="hover:bg-[#eaeaea]">
          <Link href="/">
            <a className="text-[12.8px] py-1 pr-5 font-[400] text-[#252d3a] leading-[1.4] flex justify-start items-center gap-1">
              <span className="text-md ml-1">
                <AiOutlineCheck />
              </span>
              Best Match
            </a>
          </Link>
        </li>
        <li className="hover:bg-[#eaeaea]">
          <Link href="/">
            <a className="text-[12.8px] pl-5 py-1 pr-5 font-[400] text-[#252d3a] leading-[1.4] flex justify-start items-center gap-1">
              {/* <span className="text-md ml-1">
                <AiOutlineCheck />
              </span> */}
              Price:Low to High
            </a>
          </Link>
        </li>
        <li className="hover:bg-[#eaeaea]">
          <Link href="/">
            <a className="text-[12.8px] pl-5 py-1 pr-5 font-[400] text-[#252d3a] leading-[1.4] flex justify-start items-center gap-1">
              {/* <span className="text-md ml-1">
                <AiOutlineCheck />
              </span> */}
              Price:High to Low
            </a>
          </Link>
        </li>
        <li className="hover:bg-[#eaeaea]">
          <Link href="/">
            <a className="text-[12.8px] pl-5 py-1 pr-5 font-[400] text-[#252d3a] leading-[1.4] flex justify-start items-center gap-1">
              {/* <span className="text-md ml-1">
                <AiOutlineCheck />
              </span> */}
              Newest Arrivals
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
};
