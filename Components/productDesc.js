import { TextHighlighter } from "./textHighlighter";

export const ProductDesc = ({
  title,
  color,
  sku,
  material,
  descTop,
  descMid,
  descBot,
}) => {
  return (
    <div className="pt-[30px] border-t border-[#dad0cc]">
      <h3 className="font-bold text-[19px] xl:text-[22px] leading-[27px] tracking-[.02em] text-[#262e39] text-center">
        <TextHighlighter bgBrigth>{title}</TextHighlighter>
      </h3>
      <div className="py-[30px]">
        {color && sku && material ? (
          <>
            <h1 className="font-medium text-[16px] leading-[30px] tracking-[.02em] text-[#262e39] text-center">
              Colour: {color}
            </h1>
            <h1 className="font-medium text-[16px] leading-[30px] tracking-[.02em] text-[#262e39] text-center">
              Material: {material}
            </h1>
            <h1 className="font-medium text-[16px] leading-[30px] tracking-[.02em] text-[#262e39] text-center">
              SKU: {sku}
            </h1>
          </>
        ) : (
          <>
            <div className="mb-[15px]">
              <p className="font-medium text-[16px] leading-[30px] tracking-[.02em] text-[#262e39] text-center">
                {descTop}
              </p>
            </div>
            <div className="mb-[15px]">
              <p className="font-medium text-[16px] leading-[30px] tracking-[.02em] text-[#262e39] text-center">
                {descMid}
              </p>
            </div>
            <div className="mb-[15px]">
              <p className="font-medium text-[16px] leading-[30px] tracking-[.02em] text-[#262e39] text-center">
                {descBot}
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
