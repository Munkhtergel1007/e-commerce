import Image from "next/image";
import Link from "next/link";
import { useContext, useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { priceFormat } from "../common/util";
import { FavContext } from "../context/FavContext";

export const ClothCard = ({ img, title, price, href, data }) => {
  const [isHeartCLicked, setIsHeartCLicked] = useState(false);
  const [isMouseEnter, setIsMouseEnter] = useState(false);
  const favourite = useContext(FavContext);
  return (
    <div
      className="relative my-[15px] mx-[.99%] border-2 border-[#eef1f4] rounded-[12px] inline overflow-hidden w-[48%] h-auto md:h-[440px] md:w-[31.3%] transition-[.5s] hover:shadow-xl"
      onMouseEnter={() => setIsMouseEnter(true)}
      onMouseLeave={() => setIsMouseEnter(false)}>
      <div className="max-w-full h-[276px] relative">
        <Link href={href ? href : "/"}>
          <a className="w-full h-full flex justify-center items-center">
            <Image src={img} alt="" layout="fill" />
          </a>
        </Link>
      </div>
      <div className="text-center mt-1 py-[10px] px-[15px] bg-white w-full">
        <Link href={href ? href : "/"}>
          <a className="bg-transparent text-center text-[#666] text-[.87em] leading-[1.3em]">
            {title}
          </a>
        </Link>
        <div className="w-full mt-1">
          <Link href={href ? href : "/"}>
            <a className="text-[1.2em] text-[#666] font-medium text-center">
              {priceFormat(price)}₮
            </a>
          </Link>
        </div>
        <button
          className="absolute top-1 right-1 text-xl p-5 cursor-pointer flex justify-center items-center before:absolute before:top-[11px] before:right-[12px] before:rounded-full before:w-[calc(100%-24px)] before:h-[calc(100%-24px)] before:bg-[#f2e7e2] before:z-0"
          onClick={() => setIsHeartCLicked(!isHeartCLicked)}>
          <span
            className="relative z-10 text-[#d76a3b]"
            onClick={() => {
              favourite.setFavContext((product) => {
                let idx = -1;
                product?.forEach((el, index) => {
                  if (el._id === data._id) idx = index;
                });
                console.log(idx, product, data);
                if (idx === -1) return [...(product || []), data];
              });
              console.log(favourite.favContext);
            }}>
            <AiFillHeart className={`${isHeartCLicked ? "block" : "hidden"}`} />
            <AiOutlineHeart
              className={`${isHeartCLicked ? "hidden" : "block"}`}
            />
          </span>
        </button>
      </div>
      <div
        className={`${
          isMouseEnter ? "opacity-1 visible" : "opacity-0 invisible"
        } w-full p-[15px] pt-0 transition-[.5s]`}>
        <button className="uppercase bg-[#e66328] border border-[#e66328] font-[400] cursor-pointer h-[47px] text-md rounded-sm text-white w-full text-center hover:text-[#133246]">
          Add to basket
        </button>
      </div>
    </div>
  );
};
