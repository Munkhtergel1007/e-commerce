export const SectionTitle = ({ children, sm, constant }) => {
  return (
    <h1
      className={`${
        sm
          ? "text-[23px] md:text-[28px] leading-[38px]"
          : `${
              constant
                ? "text-[22px] sm:text-[32px]"
                : "text-[23px] md:text-[32px]"
            } leading-[39px]`
      } font-bold text-center tracking-[.02em]`}
    >
      {children}
    </h1>
  );
};
