import { withError, withLabel } from "../../hoc";
import { Input } from "../input";

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

export const FormInput = withError(withLabel(Input));
