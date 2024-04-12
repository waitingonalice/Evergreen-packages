import { forwardRef } from "react";
import { cn } from "../../utils";
import { ErrorMessage, ErrorProps } from "../error";
import { Label, LabelProps } from "../label";
import { Input, InputProps, NativeSelect, NativeSelectProps } from "..";

interface FormProps {
  children: React.ReactNode;
  className?: string;
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
  autocomplete?: "on" | "off";
}
const Form = ({
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

interface FormComponentWrapperProps extends LabelProps, ErrorProps {
  children: JSX.Element;
  className?: string;
}

const FormWrapper = (props: FormComponentWrapperProps) => {
  const { showError, errorMessage, label, children, className } = props;

  return (
    <div className={cn("flex flex-col gap-y-1 w-full", className)}>
      {label && <Label {...props} />}
      {children}
      {showError && <ErrorMessage errorMessage={errorMessage} />}
    </div>
  );
};

type FormComponentProps = Omit<FormComponentWrapperProps, "children">;

export type FormInputProps = InputProps & FormComponentProps;
const FormInput = forwardRef(
  (props: FormInputProps, ref: React.Ref<HTMLInputElement>) => {
    const { className, ...rest } = props;
    return (
      <FormWrapper {...rest} className={className}>
        <Input {...rest} ref={ref} />
      </FormWrapper>
    );
  }
);
FormInput.displayName = "FormInput";

export type FormNativeSelectProps = NativeSelectProps & FormComponentProps;
const FormNativeSelect = forwardRef(
  (props: FormNativeSelectProps, ref: React.Ref<HTMLSelectElement>) => {
    const { className, ...rest } = props;
    return (
      <FormWrapper {...rest} className={className}>
        <NativeSelect {...rest} ref={ref} />
      </FormWrapper>
    );
  }
);
FormNativeSelect.displayName = "FormNativeSelect";

export { FormInput, FormNativeSelect, FormWrapper, Form };
