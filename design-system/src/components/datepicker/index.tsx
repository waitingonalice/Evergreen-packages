import React, { useRef, useState } from "react";
import { Calendar } from "lucide-react";
import { useOutsideClick } from "../../hooks/outside-click";
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
  const [focus, setFocus] = useState(false);

  useOutsideClick(inputRef, () => setFocus(false));

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.value) {
      onChange(null);
      return;
    }
    onChange(new Date(e.target.value));
  };

  const handleClick = () => {
    if (disabled) return;
    setFocus(true);
    inputRef.current?.showPicker();
  };

  return (
    <div
      className={cn(
        "relative w-full",
        "flex gap-x-2 whitespace-nowrap shadow-sm rounded-md border border-gray-3 px-4 py-2",
        "transition-all duration-100",
        focus && "ring-offset-2 ring-primary-main ring-2",
        disabled && "bg-gray-2",
        showError && "border-error-main",
        focus && showError && "ring-error-main"
      )}
    >
      <Calendar className="w-5 h-5 flex-shrink-0 text-gray-3" />
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
        className={cn(
          "absolute top-0 left-0 opacity-0 h-full w-full cursor-pointer",
          disabled && "cursor-not-allowed"
        )}
        type={withTime ? "datetime-local" : "date"}
        onChange={handleOnChange}
        onClick={handleClick}
      />
    </div>
  );
}

export { NativeDatePicker };
