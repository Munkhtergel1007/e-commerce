export const AdvantageSide = ({ icon, title }) => {
  return (
    <span className="text-[3rem] text-[#e66328]">
      <div className="flex justify-center text-[40px] md:text-[50px]">
        {icon()}
      </div>
      <p className="pt-[7px] md:pt-[14px] text-[12px] md:text-[14px] font-medium leading-[20px] text-center text-[#262e39] tracking-[0.02em]">
        {title}
      </p>
    </span>
  );
};
