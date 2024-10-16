import React from "react";
import { useForm, Controller, type SubmitHandler } from "react-hook-form";
import { TextField, Button } from "@radix-ui/themes";
import { useAuthService } from "@/services";
import type { Credentials } from "@/types/auth.d";

export const SigninForm: React.FC = () => {
  const { handleSubmit, control } = useForm<Credentials>();
  const { authenticateCredentials } = useAuthService();

  const [loading, setLoading] = React.useState<boolean>(false);

  const onFormSubmit: SubmitHandler<Credentials> = async (formData): Promise<void> => {
    return;
    setLoading(true);

    await authenticateCredentials(formData, setLoading);
  };

  return (
    <>
      <h1 className="text-md text-center text-gray-200 font-medium my-3">LOGIN TO ADMIN DASHBOARD</h1>

      <form onSubmit={handleSubmit(onFormSubmit)} className="flex flex-col gap-y-3">
        <Controller
          name="email"
          control={control}
          defaultValue=""
          render={({ field }) => <TextField.Root type="email" size="3" placeholder="Enter e-mail" {...field} required autoFocus />}
        />
        <Controller
          name="password"
          control={control}
          defaultValue=""
          render={({ field }) => <TextField.Root type="password" size="3" placeholder="Enter password" {...field} required />}
        />

        <Button type="submit" size="3" loading={loading}>
          Log In
        </Button>
      </form>
    </>
  );
};
