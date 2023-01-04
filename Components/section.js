export const Section = ({ children, className }) => {
  return (
    <div className={`rounded-xl bg-[#262e39] relative ${className}`}>
      {children}
    </div>
  );
};
