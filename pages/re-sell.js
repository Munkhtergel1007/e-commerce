import Head from "next/head";
import { Checkbox } from "../Components/checkbox";
import Container from "../Components/container";
import { Footer } from "../Components/footer";
import Header from "../Components/header";
import { TextInput } from "../Components/textInput";
import { FilterData } from "../dummyData/filter";

const ReSell = () => {
  return (
    <>
      <Head>
        <title>Thrifter Re-Sell</title>
      </Head>
      <Header />
      <div className="mt-0 md:mt-[70px]"></div>
      <main className="pt-10">
        <Container>
          <div className="flex flex-col md:flex-row">
            <div className="w-full">
              <input
                type="file"
                className="custom-file-input"
                accept="image/png, image/jpeg"
              />
            </div>
            <div className="w-full">
              <div className="mb-8">
                <TextInput id="product-name" title="Product name" />
              </div>
              <div className="mb-8">
                <h1 className="uppercase text-[.75em] md:text-[12px] tracking-[.3em] mb-2 font-medium block w-full">
                  Type
                </h1>
                <div className="flex gap-4 flex-wrap">
                  <Checkbox title="Men" />
                  <Checkbox title="Women" />
                </div>
              </div>
              <div className="mb-8">
                <h1 className="uppercase text-[.75em] md:text-[12px] tracking-[.3em] mb-2 font-medium block w-full">
                  Category
                </h1>
                <div className="flex gap-4 flex-wrap">
                  {FilterData.map((data) =>
                    data.content.map((content, index) => (
                      <Checkbox title={content} key={index} />
                    ))
                  )}
                </div>
              </div>
              <div>
                <TextInput id="price" title="Price($)" type="number" />
              </div>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default ReSell;
