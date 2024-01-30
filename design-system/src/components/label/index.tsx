import clsx from "clsx";
import { Text } from "../text";

export interface LabelProps {
  id?: string;
  label?: string;
  subLabel?: string;
  required?: boolean;
  className?: string;
}

export const Label = ({
  label,
  subLabel,
  id,
  required,
  className,
}: LabelProps) => (
  <span className={clsx({ "mb-1": Boolean(subLabel) }, className)}>
    <label htmlFor={id} className="text-secondary-5 flex gap-x-1">
      <Text type="body">{label}</Text>
      {required ? <span className="text-error-main">*</span> : null}
    </label>
    {subLabel && (
      <Text type="caption" className="text-secondary-4">
        {subLabel}
      </Text>
    )}
  </span>
);
