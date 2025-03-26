"use client";

import { Formik, Form, FormikHelpers } from "formik";
import AuthInput from "@/app/components/authInput";
import Button from "@/app/components/Button";
import { z } from "zod";

interface PasswordFormValues {
  password: string;
  confirmPassword: string;
}

const passwordSchema = z
  .object({
    password: z.string().min(8, "Password must be at least 8 characters long"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords must match",
    path: ["confirmPassword"],
  });

const NewPasswordForm = ({
  onSubmit,
}: {
  onSubmit: (password: string, confirmPassword: string) => void;
}) => {
  const validateForm = (values: PasswordFormValues) => {
    const errors: Partial<Record<keyof PasswordFormValues, string>> = {};

    try {
      passwordSchema.parse(values);
    } catch (err) {
      if (err instanceof z.ZodError) {
        err.errors.forEach((e) => {
          if (e.path[0] in errors) return;
          errors[e.path[0] as keyof PasswordFormValues] = e.message;
        });
      }
    }

    return errors;
  };

  const handleSubmit = (
    values: PasswordFormValues,
    { setSubmitting }: FormikHelpers<PasswordFormValues>,
  ) => {
    console.log("New Password Set:", values.password);
    setSubmitting(false);
    onSubmit(values.password, values.confirmPassword);
  };

  return (
    <Formik
      initialValues={{ password: "", confirmPassword: "" }}
      validate={validateForm}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="w-full max-w-[404px] flex flex-col items-start justify-center gap-6">
          <div>
            <h1 className="text-[#1B212D] font-semibold text-[30px]">
              Reset Password
            </h1>
          </div>

          <AuthInput
            label="New Password"
            name="password"
            type="password"
            placeholder="Enter your new password"
          />
          <AuthInput
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            placeholder="Confirm your new password"
          />

          <Button
            label="Done"
            disabled={isSubmitting}
            type="submit"
            gradient="bl"
          />
        </Form>
      )}
    </Formik>
  );
};

export default NewPasswordForm;
