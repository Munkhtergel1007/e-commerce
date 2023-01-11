import React from "react";

export const Label = ({ id, title }) => {
  return (
    <label
      htmlFor={id}
      className="uppercase text-[.75em] md:text-[12px] tracking-[.3em] mb-2 font-medium cursor-pointer block">
      {title}
    </label>
  );
};
