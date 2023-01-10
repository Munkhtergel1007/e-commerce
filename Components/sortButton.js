import { AiFillCaretDown, AiOutlineCheck } from "react-icons/ai";
import Link from "next/link";
import Button from "./button";
import { useEffect, useState } from "react";
import useGetProducst from "../hooks/useGetProducst";

export const SortButton = ({ updateSort }) => {
  const [isSortClicked, setIsSortClicked] = useState(false);
  const [check, setCheck] = useState(0);
  const sort = 0;

  useEffect(() => {
    fixMargin(["high", "low"], ["normal"]);
  }, []);

  const sortHandler = (e) => {
    sort = 0;
    setCheck(0);
    if (e === "Price:Low to High") {
      fixMargin(["normal", "low"], ["high"]);
      sort = 1;
      setCheck(1);
    }
    if (e === "Price:High to Low") {
      fixMargin(["normal", "high"], ["low"]);
      sort = -1;
      setCheck(2);
    }
    if (e === "Best Match") {
      fixMargin(["high", "low"], ["normal"]);
      sort = 0;
      setCheck(0);
    }
    updateSort(sort);
  };
  const fixMargin = (addIds, removeIds) => {
    addIds.forEach((el) => {
      let temp = document.getElementById(el);
      temp.classList.add("pl-5");
    });
    removeIds.forEach((el) => {
      let temp = document.getElementById(el);
      temp.classList.remove("pl-5");
    });
  };

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
        } absolute top-[100%] w-full left-0 z-20 bg-white py-1 shadow-sm border border-[rgba(0,0,0,.15)] rounded-md`}>
        <li className="hover:bg-[#eaeaea]">
          <span
            id="normal"
            onClick={(e) => sortHandler(e.target?.innerText)}
            className="text-[12.8px] py-1 pr-5 font-[400] text-[#252d3a] leading-[1.4] flex justify-start items-center gap-1 cursor-pointer">
            {check === 0 ? (
              <span className="text-md ml-1">
                <AiOutlineCheck />
              </span>
            ) : null}
            Best Match
          </span>
        </li>
        <li className="hover:bg-[#eaeaea]">
          <span
            id="high"
            onClick={(e) => sortHandler(e.target?.innerText)}
            className="text-[12.8px] py-1 pr-5 font-[400] text-[#252d3a] leading-[1.4] flex justify-start items-center gap-1 cursor-pointer">
            {check === 1 ? (
              <span className="text-md ml-1">
                <AiOutlineCheck />
              </span>
            ) : null}
            Price:Low to High
          </span>
        </li>
        <li className="hover:bg-[#eaeaea]">
          <span
            id="low"
            onClick={(e) => sortHandler(e.target?.innerText)}
            className="text-[12.8px] py-1 pr-5 font-[400] text-[#252d3a] leading-[1.4] flex justify-start items-center gap-1 cursor-pointer">
            {check === 2 ? (
              <span className="text-md ml-1">
                <AiOutlineCheck />
              </span>
            ) : null}
            Price:High to Low
          </span>
        </li>
      </ul>
    </div>
  );
};
