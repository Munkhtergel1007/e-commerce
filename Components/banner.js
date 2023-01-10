import Image from "next/image";
import BannerImage from "../public/img/banner-image.webp";
import Container from "./container";
import Button from "./button";
import { BannerTitle } from "./bannerTitle";
import API from "../api";

export default function Banner() {
  const checkAuth = async () => {
    await API.post("/checkAuth")
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className="mb-[-6px] md:mb-0 md:h-screen banner-bg-image">
      <div className="block md:hidden">
        <Image className="" src={BannerImage} alt="" />
      </div>
      <Container>
        <div className="h-full w-full justify-center flex-col hidden md:flex banner-title-anime">
          <BannerTitle
            title={[
              "Explore our huge range of",
              <br key="1" />,
              "quality second-hand fashion.",
            ]}
          />
          <div className="flex gap-2 mt-8">
            {/* <Button title="shop women" href="/market/women" /> */}
            <Button title="shop women" normal onclick={checkAuth} />
            <Button title="shop men" href="/market/men" />
          </div>
        </div>
      </Container>
    </div>
  );
}
