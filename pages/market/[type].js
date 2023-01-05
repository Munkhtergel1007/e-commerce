import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router";

import Header from "../../Components/header";
import Container from "../../Components/container";
import { Footer } from "../../Components/footer";
import { Filter } from "../../Components/filter";
import { ClothCard } from "../../Components/clothCard";
import { SortButton } from "../../Components/sortButton";
import { SideFilterHeader } from "../../Components/sideFilterHeader";

import useGetProducst from "../../hooks/useGetProducst";
import useGetCategories from "../../hooks/useGetCategory";

const Gender = () => {
  const router = useRouter();
  const { type } = router.query;
  const { loading, product, updateFilter } = useGetProducst();
  const { data: categories, loading: catLoading } = useGetCategories();

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
            }  after:absolute after:w-[110%] after:h-[130%] after:left-[-5%] after:top-[-30%] after:rotate-[-1deg]`}>
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
              {catLoading && <>Loading...</>}
              {categories?.map((cat, index) => {
                return (
                  <SideFilterHeader
                    key={index}
                    title={cat?.name}
                    childrenCategories={cat?.childrenCategories ?? []}
                    updateFilter={updateFilter}
                  />
                );
              })}
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
                    {product.length} results
                  </span>
                </div>
              </div>
              <div className="flex flex-wrap mt-0 md:mt-7 mb-16">
                {loading && <>Loading...</>}
                {product?.map((data, index) => (
                  <ClothCard
                    img={data.img}
                    title={data.title}
                    price={data.price}
                    // href={data.href}
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
