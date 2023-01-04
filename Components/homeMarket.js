import { ViewAll } from "./viewAll";
import { MainClothCard } from "./mainClothCard";
import { TextHighlighter } from "./textHighlighter";
import Link from "next/link";

export const HomeMarket = () => {
  return (
    <div className="">
      <div className="mb-8 md:mb-16 text-center">
        <h1 className="text-[#252d3a] pb-[30px] text-[22px] md:text-[26px] font-bold">
          Sizzling summer style <br /> at{" "}
          <TextHighlighter>low prices.</TextHighlighter>
        </h1>
        <div className="flex justify-center">
          <ViewAll link="/market/all" />
        </div>
      </div>
      <div className="flex overflow-x-auto gap-5 w-full">
        <MainClothCard
          content="& Denim Women's Jeans W 27 in L 25 in Blue, Blend - linen, cotton, other"
          price="£5.00"
        />
        <MainClothCard
          content="& Denim Women's Jeans W 27 in L 25 in Blue, Blend - linen, cotton, other"
          price="£5.00"
        />
        <MainClothCard
          content="& Denim Women's Jeans W 27 in L 25 in Blue, Blend - linen, cotton, other"
          price="£5.00"
        />
        <MainClothCard
          content="& Denim Women's Jeans W 27 in L 25 in Blue, Blend - linen, cotton, other"
          price="£5.00"
        />
        <div className="flex md:hidden h-full justify-center items-center self-center main-cloth-card">
          <Link href="market">
            <a className="inline-block p-3 text-center border cursor-pointer text-[.75rem] whitespace-normal">
              View all <br /> 22362 products
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};
