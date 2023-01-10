import Image from "next/image";
import { useEffect, useState } from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { MdClose } from "react-icons/md";
import {
  AiOutlineSearch,
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { HiMenuAlt2 } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";
import darkLogo from "../public/img/Thrift_Logo_Dark.svg";
import whiteLogo from "../public/img/Thrift_Logo_Boutique_white.svg";
import Container from "./container";
import Link from "next/link";
import useGetDepartment from "../hooks/useDepartment";
import useGetProducst from "../hooks/useGetProducst";
import { Loading } from "./Loading";

export default function Header({ normal, className, noExtraNav, extraNavBg }) {
  const [fixed, setFixed] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [menuOpened, setMenuOpened] = useState(false);
  const [extraMenuOpened, setExtraMenuOpened] = useState(false);

  const { data: department, loading: depLoading } = useGetDepartment();

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
    if (position < 300) {
      setFixed(false);
    } else {
      setFixed(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`${className} ${
          fixed ? `header--opening ${normal ? "bg-[#252d3a]" : "def"}` : ""
        } ${
          normal ? "bg-[#252d3a] shadow-sm" : "bg-white md:bg-transparent"
        } top-0 left-0 w-full z-30 header`}>
        {depLoading && <Loading />}
        <Container>
          <div className="flex items-center h-[70px] justify-between px-0">
            <div className="block md:hidden">
              <span
                className={`${
                  normal ? "text-white" : ""
                } text-2xl cursor-pointer`}
                onClick={() => setMenuOpened(true)}>
                <HiMenuAlt2 />
              </span>
            </div>
            <div className="h-6">
              <Link href="/">
                <a>
                  <Image
                    alt=""
                    src={normal ? whiteLogo : darkLogo}
                    height="25"
                    width={`${normal ? "200" : "170"}`}
                    className="bg-cover d-inline"
                  />
                </a>
              </Link>
            </div>
            <div className="hidden md:block">
              <ul className="flex">
                {}
                <li
                  className={`${
                    normal ? "text-white after:bg-white" : "text-[#252d3a]"
                  } px-5 py-2 text-xl font-bold uppercase cursor-pointer relative nav-list`}>
                  <Link href="/re-sell">
                    <a>Re-sell</a>
                  </Link>
                </li>
                {department?.map((el, index) => (
                  <li
                    key={index}
                    className={`${
                      normal ? "text-white after:bg-white" : "text-[#252d3a]"
                    } px-5 py-2 text-xl font-bold uppercase cursor-pointer relative nav-list`}>
                    <Link href={"/market/" + el._id}>
                      <a>{el.name}</a>
                    </Link>
                  </li>
                ))}
                <li
                  className={`${
                    normal ? "text-white after:bg-white" : "text-[#252d3a]"
                  } px-5 py-2 text-xl font-bold uppercase cursor-pointer relative nav-list`}>
                  <Link href="/market/all">
                    <a>All</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <div className="gap-4 hidden md:flex">
                <Link href="/account/login">
                  <a
                    className={`${
                      normal ? "text-white" : ""
                    } text-3xl cursor-pointer`}>
                    <BsFillPersonFill />
                  </a>
                </Link>
                <span
                  className={`${
                    normal ? "text-white" : ""
                  } text-3xl cursor-pointer`}>
                  <AiOutlineSearch />
                </span>
                <Link href="/wishlist">
                  <a
                    className={`${
                      normal ? "text-white" : ""
                    } text-3xl cursor-pointer`}>
                    <AiOutlineHeart />
                  </a>
                </Link>
              </div>
              <div className="flex gap-2 md:hidden">
                <span
                  className={`${
                    normal ? "text-white" : ""
                  } text-2xl cursor-pointer`}>
                  <AiOutlineSearch />
                </span>
                <span
                  className={`${
                    normal ? "text-white" : ""
                  } text-2xl cursor-pointer`}>
                  <AiOutlineShoppingCart />
                </span>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {noExtraNav ? (
        ""
      ) : (
        <div
          className={`${fixed ? "extra-nav--opening" : ""} ${
            extraNavBg ? extraNavBg : "bg-[#eef1f4]"
          } md:hidden py-4 z-30`}>
          <Container>
            <ul className="flex justify-between">
              <li className="">
                <a className="text-[#252d3a] text-[15px] font-bold text-center block">
                  Women
                </a>
              </li>
              <li className="">
                <a className="text-[#252d3a] text-[15px] font-bold text-center block">
                  Men
                </a>
              </li>
              <li className="">
                <a className="text-[#252d3a] text-[15px] font-bold text-center block">
                  Re-sell
                </a>
              </li>
            </ul>
          </Container>
        </div>
      )}

      {/* side menu => */}
      <div
        className={`${
          menuOpened ? "opacity-1 visible" : "opacity-0 invisible"
        } fixed left-0 top-0 w-full h-full bg-[rgba(255,255,255,.5)] z-10 transition-[.3s]`}
        onClick={() => setMenuOpened(false)}></div>
      <div
        className={`${
          menuOpened ? "menu--opened" : "menu"
        } transition-500 w-[350px] max-w-[95%] bg-white h-screen fixed top-0 left-0 z-30`}>
        <div className="flex flex-col">
          <div className="px-3 h-[70px]">
            <div className="border-b h-full py-2 flex justify-end items-center">
              <span
                className="text-3xl cursor-pointer"
                onClick={() => setMenuOpened(false)}>
                <MdClose />
              </span>
            </div>
          </div>
          <div>
            <ul className="flex flex-col">
              <li className="border-b">
                <a className="uppercase block text-[#252d3a] text-[1.1em] tracking-[.2em] p-4">
                  Re-sell
                </a>
              </li>
              <li className="border-b">
                <div className="flex justify-between items-center">
                  <a className="uppercase block w-full text-[#252d3a] text-[1.1em] tracking-[.2em] py-4 pl-4">
                    Women
                  </a>
                  <span
                    className="text-xl cursor-pointer border-l px-4"
                    onClick={() => setExtraMenuOpened(!extraMenuOpened)}>
                    <IoIosArrowDown />
                  </span>
                </div>
                <div
                  className={`${
                    extraMenuOpened ? "extra-menu--open" : "extra-menu"
                  } overflow-hidden relative after:top-0 after:absolute after:h-full after:left-5 after:border-l after:border-black`}>
                  <ul>
                    <li>
                      <a className="pl-[35px] font-[400] text-[#252d3a] py-2 pr-[25px] block text-[14px] tracking-[.025em] leading-[1.6]">
                        Women Category
                      </a>
                    </li>
                    <li>
                      <a className="pl-[35px] font-[400] text-[#252d3a] py-2 pr-[25px] block text-[14px] tracking-[.025em] leading-[1.6]">
                        Women Category
                      </a>
                    </li>
                    <li>
                      <a className="pl-[35px] font-[400] text-[#252d3a] py-2 pr-[25px] block text-[14px] tracking-[.025em] leading-[1.6]">
                        Women Category
                      </a>
                    </li>
                    <li>
                      <a className="pl-[35px] font-[400] text-[#252d3a] py-2 pr-[25px] block text-[14px] tracking-[.025em] leading-[1.6]">
                        Women Category
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
