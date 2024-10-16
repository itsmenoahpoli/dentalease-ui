import React from "react";
import { SigninForm } from "@/components";

const SigninPage: React.FC = () => {
  return (
    <div className="w-full flex flex-col gap-y-3">
      <SigninForm />
    </div>
  );
};

export default SigninPage;
