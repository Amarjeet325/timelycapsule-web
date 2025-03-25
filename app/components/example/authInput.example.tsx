import { Form, Formik, FormikHelpers } from "formik";
import AuthInput, { emailSchema, passwordSchema } from "../authInput";
import { z } from "zod";

interface LoginFormValues {
  email: string;
  password: string;
}

const LoginForm = () => {
  // Custom validation function using Zod
  const validateForm = (values: LoginFormValues) => {
    const errors: Partial<Record<keyof LoginFormValues, string>> = {};

    try {
      emailSchema.parse(values.email);
    } catch (err) {
      if (err instanceof z.ZodError) {
        errors.email = err.errors[0].message;
      }
    }

    try {
      passwordSchema.parse(values.password);
    } catch (err) {
      if (err instanceof z.ZodError) {
        errors.password = err.errors[0].message;
      }
    }

    return errors;
  };

  const handleSubmit = (
    values: LoginFormValues,
    { setSubmitting }: FormikHelpers<LoginFormValues>,
  ) => {
    // Handle form submission
    console.log(values);
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validate={validateForm}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="space-y-4">
          <AuthInput
            label="Email"
            name="email"
            type="email"
            placeholder="Enter your email"
          />
          <AuthInput
            label="Password"
            name="password"
            type="password"
            placeholder="Enter your password"
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-500 text-white p-2 rounded"
          >
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
