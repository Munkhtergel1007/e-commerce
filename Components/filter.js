import { useState } from "react";
import { MdClose } from "react-icons/md";
import Button from "./button";
import { SideFilterHeader } from "./sideFilterHeader";
import { FilterData } from "../dummyData/filter";

export const Filter = () => {
  const [openFilter, setOpenFilter] = useState(false);

  return (
    <>
      <Button
        className="block md:hidden"
        title="filter"
        normal
        onclick={() => setOpenFilter(true)}
      />

      {/* Filter side */}
      <div
        className={`${
          openFilter ? "side-filter--opening" : ""
        } fixed h-full top-0 left-0 bg-white z-20 side-filter`}
      >
        <div
          className={`${
            openFilter
              ? "w-full px-3 opacity-1 visible"
              : "w-0 px-0 opacity-0 invisible"
          } flex justify-between items-center bg-black h-[6%]`}
        >
          <h1 className="text-[20px] font-bold text-white tracking-[.025em]">
            Filters
          </h1>
          <span
            className="text-white text-2xl"
            onClick={() => setOpenFilter(false)}
          >
            <MdClose />
          </span>
        </div>
        <div
          className={`${
            openFilter
              ? "w-full opacity-1 visible"
              : "w-0 px-0 opacity-0 invisible"
          } bg-[#eff1f2]`}
        >
          {FilterData.map((data, index) => (
            <SideFilterHeader
              title={data.title}
              data={data.content}
              key={index}
            />
          ))}
        </div>
      </div>
    </>
  );
};
