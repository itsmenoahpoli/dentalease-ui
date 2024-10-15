import React from "react";
import { Outlet } from "react-router-dom";
import { Theme, Flex } from "@radix-ui/themes";
import { AppIdleChecker } from "@/components";

export const DashboardLayout: React.FC = () => {
  return (
    <Theme appearance="light">
      <AppIdleChecker isDisabled />

      <div className="h-screen w-full">
        <Flex direction="row" className="h-full">
          <div className="fixed top-0">{/* <DashboardSidebar /> */}</div>

          <div className="dashboard-content h-full ml-[240px] pb-[70px]">{/* <DashboardContent children={<Outlet />} /> */}</div>
        </Flex>
      </div>
    </Theme>
  );
};
