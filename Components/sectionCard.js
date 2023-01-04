import Image from "next/image";
import Button from "./button";

export const SectionCard = ({ title, bg, href }) => {
  return (
    <div
      className={`h-[190px] md:h-auto rounded-xl bg-cover bg-no-repeat bg-center relative md:h-[285px] w-full h-auto flex justify-center items-center image`}
    >
      <style jsx>{`
        .image {
          background-image: url(${bg});
        }
      `}</style>
      <Button href={href} title={title} font="400" className="min-w-[200px]" />
    </div>
  );
};
