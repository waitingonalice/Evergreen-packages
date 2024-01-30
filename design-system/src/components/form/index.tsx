import { forwardRef } from "react";
import { ErrorMessage, ErrorProps } from "../error";
import { Input, InputProps } from "../input";
import { Label, LabelProps } from "../label";

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

export const FormInput = forwardRef(
  (
    props: InputProps & LabelProps & ErrorProps,
    ref: React.Ref<HTMLInputElement>
  ) => {
    const { showError, errorMessage, label } = props;

    return (
      <div className="flex flex-col gap-y-1">
        {label && <Label {...props} />}
        <Input {...props} ref={ref} />
        {showError && <ErrorMessage errorMessage={errorMessage} />}
      </div>
    );
  }
);

FormInput.displayName = "FormInput";
