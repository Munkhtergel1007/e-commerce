import { useState } from "react";

export const Checkbox = ({ title, children }) => {
  const [isChecked, setIsChecked] = useState(false);

  const CheckboxHandler = (e) => {
    if (e.target.checked) {
      setIsChecked(true);
    } else {
      setIsChecked(false);
    }
  };

  return (
    <div>
      <label
        className={`${
          isChecked
            ? "font-bold hover:text-[#0654ba]"
            : "font-[400] hover:text-black"
        } text-[smaller] tracking-[.025em] leading-[1.6] text-[#252d3a] flex gap-1 cursor-pointer transition-[.3s]`}
      >
        <input
          type="checkbox"
          className="appearance-none"
          onClick={CheckboxHandler}
        />
        {title}
        {children}
      </label>
    </div>
  );
};
