import { useState } from "react";

export const ReSellCheckBox = ({
  title,
  children,
  isChecked,
  age,
  innerRef,
}) => {
  const handleCheck = (e) => {
    console.log(e.target.checked);
    // if (e.target.checked) {
    //   updateFilter("add", categoryId, parentTitle);
    // } else {
    //   updateFilter("remove", categoryId, parentTitle);
    // }
  };

  return (
    <div className="flex items-center">
      <label
        className={`text-[smaller] tracking-[.025em] leading-[15px] text-[#252d3a] flex gap-1 cursor-pointer transition-[.3s]`}
      >
        <input
          type="radio"
          name={age}
          onClick={handleCheck}
          id="age1"
          ref={innerRef}
        />
        {title}
        {children}
      </label>
    </div>
  );
};
