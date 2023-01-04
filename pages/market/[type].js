import { useRouter } from "next/router";
import Container from "../../Components/container";
import { Footer } from "../../Components/footer";
import Header from "../../Components/header";
import { Filter } from "../../Components/filter";
import { ClothCard } from "../../Components/clothCard";
import { SideFilterHeader } from "../../Components/sideFilterHeader";

import { ClothCardData } from "../../dummyData/clothCard";
import { FilterData } from "../../dummyData/filter";
import { SortButton } from "../../Components/sortButton";
import Head from "next/head";

const Gender = () => {
  const router = useRouter();
  const { type } = router.query;

  return (
    <>
      <Head>
        <title>
          Thrifter{" "}
          {type === "all" ? "All" : type === "women" ? "Women`s" : "Men`s"}{" "}
          Clothes
        </title>
      </Head>
      <Header normal />
      <div className="mt-0 md:mt-[70px] overflow-x-hidden">
        <div className="mb-10">
          <div
            className={`bg-[#F2E7E2] relative pt-[30px] pb-[45px] ${
              type === "women" ? "after:bg-[#AF5731]" : "after:bg-[#3B4859]"
            }  after:absolute after:w-[110%] after:h-[130%] after:left-[-5%] after:top-[-30%] after:rotate-[-1deg]`}
          >
            <Container>
              <div className="relative z-10">
                <h1 className="tracking-[.02em] font-bold md:text-[35px] leading-[40px] text-white text-center">
                  {type === "all"
                    ? "Boutique + All New In"
                    : type === "women"
                    ? "Boutique + Women`s New In"
                    : "Boutique + Men`s New In"}
                </h1>
              </div>
            </Container>
          </div>
        </div>
        <Container>
          <div className="mt-7"></div>
          <div className="flex gap-4">
            <div className="hidden md:block pt-[1em] w-3/12">
              {FilterData.map((data, index) => (
                <SideFilterHeader
                  key={index}
                  title={data.title}
                  data={data.content}
                />
              ))}
            </div>
            <div className="w-full">
              <div className="after:flex after:h-[5px] after:w-full after:border-b after:border-[#ccc] px-5 md:px-0">
                <div className="mb-5 flex md:items-center gap-1 md:mb-1 float-none md:float-right">
                  <Filter />
                  <span className="text-[.8em] font-medium hidden md:block">
                    Sort by:
                  </span>
                  <SortButton />
                </div>
                <div>
                  <span className="uppercase text-left text-[#252d3a] font-medium text-[13.6px] md:text-[16px] md:leading-[1.6]">
                    20000 results
                  </span>
                </div>
              </div>
              <div className="flex flex-wrap mt-0 md:mt-7 mb-16">
                {ClothCardData.map((data, index) => (
                  <ClothCard
                    img={data.img}
                    title={data.title}
                    price={data.price}
                    href={data.href}
                    key={index}
                  />
                ))}
              </div>
            </div>
          </div>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default Gender;
