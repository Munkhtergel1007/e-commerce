import Link from "next/link";

function AdminBox({ title, href }) {
  return (
    <Link href={href}>
      <div className="w-full bg-[#e66328] border border-[#e66328] border-2 rounded-xl h-64 flex justify-center items-center cursor-pointer">
        <h1 className="uppercase text-xl text-white font-bold">{title}</h1>
      </div>
    </Link>
  );
}

export default AdminBox;
