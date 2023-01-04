export default function Container({ children }) {
  return (
    <div className="container mx-auto 2xl-max-w-[1280px] h-full px-[10px] sm:px-0">
      {children}
    </div>
  );
}
