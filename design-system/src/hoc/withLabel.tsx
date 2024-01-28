import React, { forwardRef } from "react";
import clsx from "clsx";
import { Text } from "../components";

export interface LabelProps {
  id?: string;
  label?: string;
  subLabel?: string;
  required?: boolean;
  className?: string;
}

const Label = ({ label, subLabel, id, required, className }: LabelProps) => (
  <span className={clsx("flex flex-col mb-1", className)}>
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

export const withLabel = <C,>(Component: React.FC<C>) => {
  const withLabelComponent = forwardRef((props: LabelProps & C, ref) => {
    const { label, subLabel } = props;

    if (!label) return <Component {...props} ref={ref} />;

    return (
      <div className={clsx("flex flex-col", { "gap-y-1": subLabel })}>
        <Label {...props} />
        <Component {...props} ref={ref} />
      </div>
    );
  });
  withLabelComponent.displayName = Component.displayName;
  return withLabelComponent;
};
