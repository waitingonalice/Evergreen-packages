import { cn } from "../../utils";
import { Text } from "../text";

export interface LabelProps {
  id?: string;
  label?: string;
  subLabel?: string;
  required?: boolean;
}

export const Label = ({ label, subLabel, id, required }: LabelProps) => (
  <span className={cn({ "mb-1": Boolean(subLabel) })}>
    <label htmlFor={id} className="text-secondary-5 flex gap-x-1">
      <Text type="body">{label}</Text>
      {required && <span className="text-error-main">*</span>}
    </label>
    {subLabel && (
      <Text type="caption" className="text-secondary-4">
        {subLabel}
      </Text>
    )}
  </span>
);
