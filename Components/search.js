import { AiOutlineSearch } from "react-icons/ai";

export const Search = () => {
  return (
    <div className="mx-3 flex pl-2 items-center relative">
      <AiOutlineSearch className="absolute left-4 text-xl" />
      <input
        className="w-full rounded-xl bg-[#EEF1F4] pl-8 focus:outline-none py-2"
        placeholder="Search your clothes here"
      />
    </div>
  );
};
