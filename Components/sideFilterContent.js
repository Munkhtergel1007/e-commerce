import { Checkbox } from "./checkbox";

export const SideFilterContent = ({ title, updateFilter, categoryId }) => {
  return (
    <div>
      <div className="rounded-[10px] py-1 px-2 border border-[#ccc] m-1 bg-transparent block md:hidden">
        <span className="text-[13.6px] tracking-[.025em] leading-[1.6] text-[#252d3a]">
          {title}
        </span>
      </div>
      <a className="pb-[.6em] d-flex">
        <Checkbox
          title={title}
          updateFilter={updateFilter}
          categoryId={categoryId}>
          <span className="font-[400] text-[1em] initial text-[#ccc] mt-4"></span>
        </Checkbox>
      </a>
    </div>
  );
};
