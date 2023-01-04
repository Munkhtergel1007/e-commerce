export const TextInput = ({ id, title, type }) => {
  return (
    <>
      <label
        htmlFor={id}
        className="uppercase text-[.75em] md:text-[12px] tracking-[.3em] mb-2 font-medium cursor-pointer block"
      >
        {title}
      </label>
      <input
        type={type ? type : "text"}
        id={id}
        className="mb-7 py-2 px-3 text-[1rem] w-full border border-[#e8e8e1] block tracking-[.025em] font-medium"
      />
    </>
  );
};
