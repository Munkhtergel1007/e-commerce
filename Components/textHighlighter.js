export const TextHighlighter = ({ children, mdNone, bgBrigth }) => {
  return (
    <span
      className={`${mdNone ? "md:text-highligth" : "text-highligth"} ${
        bgBrigth ? "before:bg-[#E7D3CA]" : "before:bg-[#DAE0E7]"
      }`}
    >
      {children}
    </span>
  );
};
