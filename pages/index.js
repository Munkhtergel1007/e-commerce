import Head from "next/head";
import Image from "next/image";
import BrendLogo from "../public/img/cloth-logo.jpg";
import { AiOutlinePlus } from "react-icons/ai";
import { CgTimer } from "react-icons/cg";
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlineSupportAgent } from "react-icons/md";
import { FaMedal } from "react-icons/fa";

import Header from "../Components/header";
import Container from "../Components/container";
import Banner from "../Components/banner";
import { HomeMarket } from "../Components/homeMarket";
import { TextHighlighter } from "../Components/textHighlighter";
import { SectionWhite } from "../Components/sectionWhite";
import { Search } from "../Components/search";
import { SectionTitle } from "../Components/sectionTitle";
import { SectionPara } from "../Components/sectionParagraph";
import { AdvantageSide } from "../Components/advantageSide";
import { Section } from "../Components/section";
import { SectionCard } from "../Components/sectionCard";
import Button from "../Components/button";
import { Footer } from "../Components/footer";
import { BannerTitle } from "../Components/bannerTitle";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Head>
        <title>Thrifter</title>
      </Head>
      <Header />
      <Banner />
      <div className="py-[35px] bg-[#eef1f4] block md:hidden">
        <Container>
          <div className="">
            <div className="text-center max-w-[300px] mx-auto mb-6">
              <BannerTitle
                title={[
                  "Explore our huge range ",
                  <br key="0" />,
                  " of quality second-hand fashion.",
                ]}
              />
            </div>
            <div className="flex justify-center gap-5">
              <Button
                href="/market/women"
                className="min-w-[155px]"
                title="Shop women"
              />
              <Button
                href="/market/men"
                className="min-w-[155px]"
                title="Shop men"
              />
            </div>
          </div>
        </Container>
      </div>
      <div className="flex md:hidden justify-center pt-[35px] gap-4">
        <AdvantageSide icon={CgTimer} title="Fast delivery" />
        <AdvantageSide icon={TbTruckDelivery} title="Fast delivery" />
        <AdvantageSide icon={MdOutlineSupportAgent} title="Fast delivery" />
        <AdvantageSide icon={FaMedal} title="Fast delivery" />
      </div>
      <div className="mt-10 md:mt-20"></div>
      <Container>
        <HomeMarket />
      </Container>
      <div className="mb-20"></div>
      <div className="bg-[#EEF1F4]">
        <Container>
          <div className="flex flex-col md:flex-row pt-[56px] pb-[80px] items-center px-0">
            <div className="w-full md:w-6/12 md:pr-[30px] pb-8 md:pb-0">
              <div>
                <SectionTitle sm>
                  Make <TextHighlighter>Second-Hand</TextHighlighter> Your First
                  Choice
                </SectionTitle>
                <SectionPara>
                  We have over 250,000 quality-assured second-hand items in
                  stock, with fast delivery and 30 day returns.
                </SectionPara>
              </div>
              <div className="justify-around pt-[35px] hidden md:flex">
                <AdvantageSide icon={CgTimer} title="Fast delivery" />
                <AdvantageSide icon={TbTruckDelivery} title="Fast delivery" />
                <AdvantageSide
                  icon={MdOutlineSupportAgent}
                  title="Fast delivery"
                />
                <AdvantageSide icon={FaMedal} title="Fast delivery" />
              </div>
            </div>
            <SectionWhite>
              <SectionTitle sm>
                All of your favourite{" "}
                <TextHighlighter mdNone>clothes</TextHighlighter>
              </SectionTitle>
              <div>
                <Image src={BrendLogo} alt="" />
              </div>
              <Search />
            </SectionWhite>
          </div>

          <div className="mb-12 md:mx-[10px] bg-[url(https://cdn.shopify.com/s/files/1/1754/6207/files/FFG_Mob_2.jpg?v=1644499812)] md:bg-[url(https://cdn.shopify.com/s/files/1/1754/6207/files/FFG_Desk.jpg?v=1644499655)] bg-cover bg-center">
            <div className="pb-[143px] md:py-[143px] mx-auto max-w-[245px] md:max-w-[590px]">
              <div>
                <SectionTitle>
                  Fashion for <TextHighlighter>good</TextHighlighter>
                </SectionTitle>
                <SectionPara className="leading-[32px] tracking-[.02em] text-[16px] md:text-[22px] my-[20px] md:my-0">
                  Re-sell and give. You have the option to support any U.K.
                  charity with every sale.
                </SectionPara>
                <p className="mt-3 font-medium text-[15px] md:text-md leading-[28px] tracking-[0.02em] text-[#262e39] text-center">
                  After each sale we`ll let you know how much you’ve raised. So
                  far the Thrift+ community has raised over £1,200,000 for good
                  causes.
                </p>
                <div className="pt-10 flex justify-center">
                  <Button
                    className="min-w-[200px]"
                    title="why re-sell"
                    sm={true}
                    font="600"
                  />
                </div>
              </div>
            </div>
          </div>

          <Section className="py-[35px] px-3 md:px-20 md:py-16 md:mx-[15px]">
            <div>
              <h1 className="text-md leading-[22px] md:text-[22px] md:leading-[27px] tracking-[.12em] font-bold flex items-center text-white gap-2 justify-center">
                <AiOutlinePlus className="font-bold" />
                DESIGNER<span className="text-[#a0aec0]">BRANDS</span>
              </h1>
              <p className="mt-4 md:mt-6 font-[500] text-[15px] leading-[22px] md:text-[22px] md:leading-[34px] tracking-[.02em] text-white text-center">
                We also stock thousands of brands <br /> on our dedicated
                designer store
              </p>
            </div>
            <div className="flex-col md:flex-row flex gap-12 mt-8">
              <SectionCard
                bg="https://cdn.shopify.com/s/files/1/1754/6207/files/Womens_New_In_2_copy_720x.png?v=1650848411"
                title="shop women"
                href="/market/women"
              ></SectionCard>
              <SectionCard
                bg="https://cdn.shopify.com/s/files/1/1754/6207/files/Screen_Shot_2022-04-24_at_20.04.27_900x.png?v=1650848693"
                title="shop men"
                href="/market/men"
              ></SectionCard>
            </div>
          </Section>

          <div className="py-12">
            <SectionTitle constant>
              Our <TextHighlighter>Mission</TextHighlighter>
            </SectionTitle>
            <SectionPara className="text-[16px] sm:text-[20px] leading-[25px] sm:leading-[36px] w-9/12 mx-auto pt-4 sm:pt-8">
              We believe no item should be thrown away - especially when it
              could be worn again. By giving clothes a second life, we’re
              powering the circular economy for fashion.
            </SectionPara>
            <div className="flex justify-center mt-8">
              <Button className="min-w-[200px]" title="Re-sell" font="500" />
            </div>
          </div>
        </Container>
      </div>
      <Footer />
    </div>
  );
}
