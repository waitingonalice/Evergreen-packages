import { Ref, forwardRef } from "react";
import { PrimitiveType } from "../../types";
import { cn } from "../../utils";
import { ErrorProps } from "../error";

export interface BaseOption {
  label: string;
  value: PrimitiveType;
}

export interface NativeSelectProps extends ErrorProps {
  id?: string;
  options: BaseOption[];
  disabled?: boolean;
  placeholder?: string;
  onChange?: (value: string) => void;
  className?: string;
  value?: PrimitiveType;
  size?: "small" | "default";
  multiple?: boolean;
}

const NativeSelect = forwardRef(
  (
    {
      id,
      disabled,
      placeholder,
      showError,
      className,
      onChange,
      options,
      value,
      size = "default",
      multiple,
    }: NativeSelectProps,
    ref: Ref<HTMLSelectElement>
  ) => {
    const handleOnChange = (value: string) => {
      if (onChange) onChange(value);
    };

    return (
      <select
        multiple={multiple}
        id={id}
        ref={ref}
        className={cn(
          size === "small" ? "py-1" : "py-2",
          "outline-none disabled:text-gray-3 block w-full rounded-md border border-gray-3  transition-all duration-100 focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed text-sm",
          showError
            ? "focus:ring-error-main pr-10 text-error-main focus:border-error-main border-error-main"
            : "focus:ring-primary-dark text-secondary-5 focus:border-gray-3",
          placeholder && !value && "text-gray-3",
          className
        )}
        disabled={disabled}
        onChange={(e) => handleOnChange(e.target.value)}
        value={value}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map((item) => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
    );
  }
);

NativeSelect.displayName = "NativeSelect";

export { NativeSelect };
