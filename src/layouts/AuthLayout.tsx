import React from "react";
import { Outlet } from "react-router-dom";
import { Theme, Flex } from "@radix-ui/themes";
import { ASSET_IMAGES } from "@/constants";

export const AuthLayout: React.FC = () => {
  return (
    <Theme appearance="light" scaling="90%">
      <div className="h-screen w-full flex flex-col items-center pt-[10%] relative bg-slate-950">
        <div className="flex flex-col gap-y-3" style={{ zoom: 0.85 }}>
          <Flex justify="center">
            <img src={ASSET_IMAGES.MAIN_LOGO_TRANSPARENT} alt="main-logo.png" className="w-[290px] h-[140px]" />
          </Flex>
          <div className="w-[400px] mt-5">
            <Outlet />
          </div>

          <div className="text-xs text-center text-gray-200 mt-3">
            <p>DentalEase Clinic Dashboard </p>
            <p>&copy; All Rights Reserved 2024</p>
          </div>
        </div>

        <small className="text-gray-500 absolute bottom-2 left-2">App Version 1.0.0.1 (beta)</small>
      </div>
    </Theme>
  );
};
