"use client";

import { Formik, Form, FormikHelpers } from "formik";
import AuthInput, { emailSchema } from "@/app/components/authInput";
import { z } from "zod";

interface EmailFormValues {
  email: string;
}

const EmailForm = ({ onSubmit }: { onSubmit: (email: string) => void }) => {
  const validateForm = (values: EmailFormValues) => {
    const errors: Partial<Record<keyof EmailFormValues, string>> = {};

    try {
      emailSchema.parse(values.email);
    } catch (err) {
      if (err instanceof z.ZodError) {
        errors.email = err.errors[0].message;
      }
    }

    return errors;
  };

  const handleSubmit = (
    values: EmailFormValues,
    { setSubmitting }: FormikHelpers<EmailFormValues>,
  ) => {
    console.log("Reset Password Email Sent To:", values.email);
    setSubmitting(false);
    onSubmit(values.email);
  };

  return (
    <Formik
      initialValues={{ email: "" }}
      validate={validateForm}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="w-full max-w-[404px] flex flex-col items-start justify-center gap-6">
          <div>
            <h1 className="text-[#1B212D] font-semibold text-[30px]">
              Forgot Password?
            </h1>
            <p className="text-[#78778B] text-sm font-normal">
              Kindly enter the email address attached to your account.
            </p>
          </div>

          <AuthInput
            label="Email"
            name="email"
            type="email"
            placeholder="Enter your email"
          />

          <button
            disabled={isSubmitting}
            type="submit"
            className="w-full px-4 rounded-xl font-semibold text-center text-[#ffffff]  transition-all shadow-[0_1px_2px_rgba(0,0,0,0.05)] h-[40px] bg-gradient-to-r from-[#48BB78] to-[#215537]   "
          >
            Submit{" "}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default EmailForm;
