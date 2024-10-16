import React from "react";
import { Outlet } from "react-router-dom";
import { Theme, Flex } from "@radix-ui/themes";
import { ASSET_IMAGES } from "@/constants";

export const AuthLayout: React.FC = () => {
  return (
    <Theme appearance="light" scaling="90%">
      <Flex className="h-screen w-full relative bg-slate-950">
        <Flex direction="column" align="center" className="h-full w-full pt-[10%]">
          <Flex justify="center" align="center" className="w-full">
            <img src={ASSET_IMAGES.MAIN_LOGO_TRANSPARENT} alt="main-logo.png" className="w-[250px] h-[140px]" />
          </Flex>

          <div className="w-[350px] mt-5" style={{ zoom: 0.85 }}>
            <Outlet />
          </div>

          <div className="flex flex-col gap-y-3">
            <div className="text-xs text-center text-gray-200 mt-3">
              <p>DentalEase Clinic Dashboard </p>
              <p>&copy; All Rights Reserved 2024</p>
            </div>
          </div>
        </Flex>

        <small className="text-gray-500 absolute bottom-2 left-2">App Version 1.0.0.1 (beta)</small>
      </Flex>
    </Theme>
  );
};
