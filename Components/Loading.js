import React from "react";
import { Hearts } from "@agney/react-loading";

export const Loading = () => {
  return (
    <div className="fixed z-20 top-0 left-0 w-screen h-screen bg-[#00000090] flex justify-center items-center">
      <div className="w-16 text-red-800">
        <Hearts />
      </div>
    </div>
  );
};
