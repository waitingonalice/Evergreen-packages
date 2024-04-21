import { cn } from "../../utils";
import { Label, LabelProps } from "../label";

interface RadioProps<T> extends LabelProps {
  value: T;
  disabled?: boolean;
  selectedValue: T;
  onChange: (value: T) => void;
}

const Radio = <T extends string>({
  label,
  subLabel,
  value,
  disabled,
  selectedValue,
  onChange,
}: RadioProps<T>) => {
  const handleOnSelect = () => {
    if (disabled) return;
    onChange(value);
  };
  return (
    <div className="flex items-center gap-x-2">
      <input
        type="radio"
        id={value}
        name={value}
        disabled={disabled}
        checked={value === selectedValue}
        className={cn(
          "h-4 w-4 border-gray-300 text-primary-main focus:ring-primary-main",
          "disabled:cursor-not-allowed disabled:bg-gray-2 disabled:border-gray-2"
        )}
        onChange={handleOnSelect}
      />
      <Label id={value} label={label} subLabel={subLabel} />
    </div>
  );
};

export { Radio };
