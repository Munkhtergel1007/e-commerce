import Link from "next/link";

export const ViewAll = ({ link }) => {
  return (
    <Link href={link ? link : "/"}>
      <a className="text-[10px] md:text-[12px] px-[14px] py-[8px] border hover-rotate uppercase rounded-sm text-[rgba(0,0,0,.5)] tracking-[2px]">
        view all
      </a>
    </Link>
  );
};
