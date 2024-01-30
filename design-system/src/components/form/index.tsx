import { forwardRef } from "react";
import { ErrorMessage, ErrorProps } from "../error";
import { Label, LabelProps } from "../label";
import { Input, InputProps } from "..";

interface FormProps {
  children: React.ReactNode;
  className?: string;
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
  autocomplete?: "on" | "off";
}

export const Form = ({
  children,
  className,
  onSubmit,
  autocomplete = "on",
}: FormProps) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit?.(e);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className={className}
      autoComplete={autocomplete}
    >
      {children}
    </form>
  );
};

export const FormWrapper = (
  props: LabelProps & ErrorProps & { children: JSX.Element }
) => {
  const { showError, errorMessage, label, children } = props;

  return (
    <div className="flex flex-col gap-y-1">
      {label && <Label {...props} />}
      {children}
      {showError && <ErrorMessage errorMessage={errorMessage} />}
    </div>
  );
};

const FormInput = forwardRef(
  (
    props: InputProps & LabelProps & ErrorProps,
    ref: React.Ref<HTMLInputElement>
  ) => (
    <FormWrapper {...props}>
      <Input {...props} ref={ref} />
    </FormWrapper>
  )
);
FormInput.displayName = "FormInput";

export { FormInput };
