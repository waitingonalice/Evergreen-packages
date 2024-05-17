import React, { useRef } from "react";
import { Calendar } from "lucide-react";
import { cn } from "../../utils";
import { ErrorProps } from "../error";
import { Text } from "../text";
import { formatTime } from "./utils";

export interface NativeDatePickerProps extends Pick<ErrorProps, "showError"> {
  withTime?: boolean;
  onChange: (date: Date | null) => void;
  value?: Date | null;
  placeholder?: string;
  disabled?: boolean;
}
function NativeDatePicker({
  withTime,
  onChange,
  value,
  placeholder,
  disabled,
  showError,
}: NativeDatePickerProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const dateDisplay = formatTime(withTime, value);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.value) {
      onChange(null);
      return;
    }
    onChange(new Date(e.target.value));
  };

  const handleClick = () => {
    if (disabled) return;
    inputRef.current?.showPicker();
  };

  return (
    <button
      disabled={disabled}
      type="button"
      aria-label="Open date picker"
      className={cn(
        "focus:outline-none focus:ring-2 focus:ring-primary-main focus:ring-offset-2",
        "disabled:cursor-not-allowed disabled:bg-gray-2",
        "whitespace-nowrap transition-all duration-100 w-full flex gap-x-4 relative shadow-sm rounded-md border border-gray-3 px-4 py-2",
        showError && "focus:ring-error-main border-error-main"
      )}
      onClick={handleClick}
    >
      <Calendar className="w-5 h-5 flex-shrink-0 text-secondary-4" />
      <Text
        className={cn(
          "text-secondary-5",
          (!dateDisplay || disabled) && "text-gray-3"
        )}
        type="body"
      >
        {dateDisplay || placeholder}
      </Text>
      <input
        ref={inputRef}
        className="-z-10 absolute top-0 left-0 opacity-0 w-full h-full"
        onChange={handleOnChange}
        type={withTime ? "datetime-local" : "date"}
      />
    </button>
  );
}

export { NativeDatePicker };
