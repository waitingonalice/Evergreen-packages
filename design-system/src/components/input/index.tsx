import { forwardRef, useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { cn } from "../../utils/cn";
import { ErrorProps } from "../error";

type Element = HTMLInputElement | HTMLTextAreaElement;

export interface InputProps extends ErrorProps {
  id?: string;
  placeholder?: string;
  value: string;
  className?: string;
  disabled?: boolean;
  onChange: (val: string, e: React.ChangeEvent<Element>) => void;
  onBlur?: (val: string, e: React.ChangeEvent<Element>) => void;
  isPassword?: boolean;
  prefixIcon?: React.ReactNode;
  size?: "small" | "default";
  autoComplete?: string;
  as?: "textarea" | "input";
}

export const Input = forwardRef((props: InputProps, ref: React.Ref<any>) => {
  const {
    id,
    placeholder,
    value,
    className,
    onChange,
    onBlur,
    disabled,
    isPassword,
    prefixIcon,
    size = "default",
    showError,
    autoComplete,
    as = "input",
  } = props;
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const Icon = isPasswordVisible ? Eye : EyeOff;

  const handleVisibilityClick = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  const handleOnChange = (e: React.ChangeEvent<Element>) => {
    if (onChange) onChange(e.target.value, e);
  };

  const handleOnBlur = (e: React.FocusEvent<Element>) => {
    onBlur?.(e.target.value, e);
    setIsFocused(false);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const commonProps = {
    disabled,
    ref,
    id,
    className: cn(
      size === "small" ? "py-1" : "py-2",
      "!ring-0 border-none rounded-md w-full placeholder-gray-3 disabled:bg-gray-2 outline-none disabled:cursor-not-allowed text-sm",
      className
    ),
    placeholder,
    value,
    onBlur: handleOnBlur,
    onChange: handleOnChange,
    onFocus: handleFocus,
    autoComplete,
  };

  return (
    <span
      className={cn(
        "flex items-center w-full justify-between",
        "rounded-md shadow-sm ring-primary-dark border border-gray-3 transition-all duration-100",
        isFocused && "ring-2 ring-offset-2",
        showError && "ring-error-main border-error-main"
      )}
    >
      {prefixIcon && <div className="items-center flex ml-3">{prefixIcon}</div>}
      {as === "input" ? (
        <input
          {...commonProps}
          type={isPassword && !isPasswordVisible ? "password" : "text"}
        />
      ) : (
        <textarea {...commonProps} />
      )}

      {isPassword && (
        <Icon
          className="text-secondary-4 h-5 w-5 mr-3"
          role="button"
          tabIndex={0}
          onClick={handleVisibilityClick}
        />
      )}
    </span>
  );
});

Input.displayName = "Input";
