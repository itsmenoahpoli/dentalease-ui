import React from "react";
import { Outlet } from "react-router-dom";
import { Theme } from "@radix-ui/themes";

export const AuthLayout: React.FC = () => {
  return (
    <Theme appearance="light" scaling="90%">
      <div className="h-screen w-full flex flex-col justify-center items-center pt-[10%] relative">
        <small className="absolute bottom-2 left-2">App Version 1.0.0.1 (beta)</small>

        <div className="flex flex-col gap-y-3" style={{ zoom: 0.9 }}>
          <div className="w-[400px] mt-5">
            <Outlet />
          </div>

          <div className="text-xs text-center text-gray-600 mt-3">
            <p>DentalEase Clinic Dashboard </p>
            <p>&copy; All Rights Reserved 2024</p>
          </div>
        </div>
      </div>
    </Theme>
  );
};
