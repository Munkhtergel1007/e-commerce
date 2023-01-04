import Link from "next/link";

export default function Button({
  className,
  title,
  font,
  sm,
  normal,
  icon,
  onclick,
  children,
  href,
  long,
}) {
  return normal ? (
    <button
      className={`${className} font-[${
        font ? font : "600"
      }] md:w-[175px] h-auto md:h-[55px] text-white px-[5px] md:px-[20px] ${
        sm ? "py-[14px]" : "py-[12px] md:pt-[18px] md:pb-[11px]"
      } max-h-[40px] text-[#999] text-[.8em] leading w-full border border-[#ccc] 
      ${
        icon ? "flex gap-1 justify-center items-center" : ""
      } text-center tracking-[.5px] uppercase rounded-sm relative`}
      onClick={onclick}
    >
      {title} <span>{icon ? icon() : icon}</span>
      {children}
    </button>
  ) : (
    <Link href={href ? href : "/"}>
      <a
        className={`${className} font-[${
          font ? font : "600"
        }] md:w-[175px] h-auto text-white ${
          sm
            ? "py-[14px]"
            : `${
                long
                  ? "py-[10px] px-[26px]"
                  : "py-[12px] md:pt-[18px] md:pb-[11px] px-[5px] md:px-[20px] md:h-[55px] "
              }`
        } bg-[#e66328] md:min-w-auto relative overflow-hidden button-anime text-[14px] md:text-[16px] ${
          icon ? "flex gap-1 justify-center items-center" : ""
        } text-center tracking-[.5px] uppercase rounded-sm relative`}
        onClick={onclick}
      >
        {title} <span>{icon ? icon() : icon}</span>
        {children}
      </a>
    </Link>
  );
}
