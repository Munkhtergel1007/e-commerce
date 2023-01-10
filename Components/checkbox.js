import { useState } from "react";

export const Checkbox = ({
  title,
  children,
  updateFilter,
  categoryId,
  parentTitle,
  type,
}) => {
  const [isChecked, setIsChecked] = useState(false);
  const handleCheck = (e) => {
    if (e.target.checked) {
      updateFilter("add", categoryId, parentTitle);
      setIsChecked(true);
    } else {
      updateFilter("remove", categoryId, parentTitle);
      setIsChecked(false);
    }
  };

  return (
    <div className="flex items-center">
      <label
        className={`${
          isChecked
            ? "font-bold hover:text-[#0654ba]"
            : "font-[400] hover:text-black"
        } text-[smaller] tracking-[.025em] leading-[15px] text-[#252d3a] flex gap-1 cursor-pointer transition-[.3s]`}>
        <input
          type="checkbox"
          className="appearance-none"
          onClick={handleCheck}
        />
        {title}
        {children}
      </label>
    </div>
  );
};
