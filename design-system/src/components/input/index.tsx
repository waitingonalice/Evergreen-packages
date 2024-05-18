import { forwardRef, useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { cn } from "../../utils/cn";
import { ErrorProps } from "../error";

export interface InputProps extends ErrorProps {
  id?: string;
  placeholder?: string;
  value: string;
  className?: string;
  disabled?: boolean;
  onChange: (val: string, e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (val: string, e: React.ChangeEvent<HTMLInputElement>) => void;
  isPassword?: boolean;
  prefixIcon?: React.ReactNode;
  size?: "small" | "default";
  autoComplete?: string;
}

export const Input = forwardRef(
  (props: InputProps, ref: React.Ref<HTMLInputElement>) => {
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
    } = props;
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isFocused, setIsFocused] = useState(false);
    const Icon = isPasswordVisible ? Eye : EyeOff;

    const handleVisibilityClick = () => {
      setIsPasswordVisible((prev) => !prev);
    };

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (onChange) onChange(e.target.value, e);
    };

    const handleOnBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      onBlur?.(e.target.value, e);
      setIsFocused(false);
    };

    const handleFocus = () => {
      setIsFocused(true);
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
        {prefixIcon && (
          <div className="items-center flex ml-3">{prefixIcon}</div>
        )}
        <input
          disabled={disabled}
          ref={ref}
          type={isPassword && !isPasswordVisible ? "password" : "text"}
          id={id}
          className={cn(
            size === "small" ? "py-1" : "py-2",
            "!ring-0 border-none rounded-md w-full placeholder-gray-3 disabled:bg-gray-2 disabled:cursor-not-allowed",
            className
          )}
          placeholder={placeholder}
          value={value}
          onBlur={handleOnBlur}
          onChange={handleOnChange}
          onFocus={handleFocus}
          autoComplete={autoComplete}
        />
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
  }
);

Input.displayName = "Input";
