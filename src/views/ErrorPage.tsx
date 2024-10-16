import React from "react";
import { useNavigate } from "react-router-dom";
import { Theme, Flex, Button } from "@radix-ui/themes";
import { ASSET_IMAGES } from "@/constants";

const ErrorPage: React.FC = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/auth/signin");
  };

  return (
    <Theme>
      <Flex direction="column" justify="center" align="center" gap="5" className="h-screen w-screen bg-slate-900">
        <Flex justify="center" align="center" className="w-full">
          <img src={ASSET_IMAGES.MAIN_LOGO_TRANSPARENT} alt="main-logo.png" className="w-[250px] h-[140px]" />
        </Flex>

        <h1 className="text-xl text-white font-bold">Ooops! Page not found</h1>

        <Button className="text-xs" onClick={goToHome}>
          GO TO HOME
        </Button>
      </Flex>
    </Theme>
  );
};

export default ErrorPage;
