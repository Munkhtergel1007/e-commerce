import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { SideFilterContent } from "./sideFilterContent";

export const SideFilterHeader = ({
  title,
  childrenCategories,
  updateFilter,
}) => {
  const [filterContentVisible, setFilterContentVisible] = useState(false);

  return (
    <div
      className={`pb-3 bg-[#efefefd4] md:bg-white border-t border-b-0 md:border-b md:border-t-0 border-[#8793ad] md:border-[#ccc] m-0 md:mb-4 md:mr-2 after:hidden md:after:block ${
        filterContentVisible ? "md:max-h-auto" : "md:max-h-[2em]"
      } transition-[1s]`}>
      <div
        className="flex justify-between items-center py-4 px-3 mb-[2px] cursor-pointer mb-0 md:p-0 md:mb-1"
        onClick={() => setFilterContentVisible(!filterContentVisible)}>
        <h1 className="text-[20px] md:text-[1em] font-bold tracking-[.025em] leading-[1.6] text-black">
          {title}
        </h1>
        <span
          className={`${
            filterContentVisible ? "rotate-180" : "rotate-0"
          } transition-[.5s] border border-[#ccc] md:border-0 rounded-full p-1 text-md md:text-[1em]`}>
          <IoIosArrowDown />
        </span>
      </div>
      <div
        className={`${
          filterContentVisible
            ? "h-fit opacity-1 visible transition-[.5s]"
            : "h-0 opacity-0 invisible"
        } flex flex-wrap px-2 md:hidden`}>
        {childrenCategories?.map((content, index) => (
          <SideFilterContent title={content.name} key={index} />
        ))}
      </div>
      <div
        className={`${
          filterContentVisible
            ? "h-fit opacity-1 visible"
            : "h-0 opacity-0 invisible"
        } hidden md:block transition-[1s]`}>
        <ul>
          {childrenCategories?.map((content, index) => (
            <SideFilterContent
              key={index}
              title={content.name}
              categoryId={content._id}
              updateFilter={updateFilter}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};
