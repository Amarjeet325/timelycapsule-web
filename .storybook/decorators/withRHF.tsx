import { action } from "@storybook/addon-actions";
import { ReactRenderer } from "@storybook/react";
import React, { ReactNode, FC } from "react";
import { FormProvider, useForm } from "react-hook-form";

const StorybookFormProvider: React.FunctionComponent<{
  children: ReactNode;
}> = ({ children }) => {
  const methods = useForm();
  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(action("[React Hooks Form] Submit"))}
      >
        {children}
      </form>
    </FormProvider>
  );
};

export default function withRHF(showSubmitButton: boolean) {
  return (Story: FC<{ name: string }>): ReactRenderer["storyResult"] => (
    <StorybookFormProvider>
      <div style={{ width: "320px" }}>
        <Story name="field-name" />
        {showSubmitButton && <button type="submit">Submit</button>}
      </div>
    </StorybookFormProvider>
  );
}
