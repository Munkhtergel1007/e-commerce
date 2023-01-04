import { Checkbox } from "./checkbox";

export const SideFilterContent = ({ title }) => {
  return (
    <>
      <div className="rounded-[10px] py-1 px-2 border border-[#ccc] m-1 bg-transparent block md:hidden">
        <span className="text-[13.6px] tracking-[.025em] leading-[1.6] text-[#252d3a]">
          {title}
        </span>
      </div>
      <li className="pb-[.6em]">
        <Checkbox title={title}>
          <span className="font-[400] text-[1em] initial text-[#ccc]">
            (1413)
          </span>
        </Checkbox>
      </li>
    </>
  );
};
