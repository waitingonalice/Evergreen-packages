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

type FormComponentProps = Omit<FormComponentWrapperProps, "children">;

const FormWrapper = (props: FormComponentWrapperProps) => {
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
    props: InputProps & FormComponentProps,
    ref: React.Ref<HTMLInputElement>
  ) => (
    <FormWrapper {...props}>
      <Input {...props} ref={ref} />
    </FormWrapper>
  )
);
FormInput.displayName = "FormInput";

export { FormInput, FormWrapper, Form };
