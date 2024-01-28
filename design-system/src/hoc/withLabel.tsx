import React, { forwardRef } from "react";
import clsx from "clsx";
import { Text } from "../components";

export interface LabelProps {
  title?: string;
  id?: string;
  required?: boolean;
  className?: string;
  subTitle?: string;
}

const Label = ({ title, subTitle, id, required, className }: LabelProps) => (
  <span className={clsx("flex flex-col mb-1", className)}>
    <label htmlFor={id} className="text-secondary-5 flex gap-x-1">
      <Text type="body">{title}</Text>
      {required ? <span className="text-error-main">*</span> : null}
    </label>
    {subTitle && (
      <Text type="caption" className="text-secondary-4">
        {subTitle}
      </Text>
    )}
  </span>
);

export const withLabel = <C,>(Component: React.FC<C>) => {
  const withLabelComponent = forwardRef((props: LabelProps & C, ref) => {
    const { title, subTitle } = props;

    if (!title) return <Component {...props} ref={ref} />;

    return (
      <div className={clsx("flex flex-col", { "gap-y-1": subTitle })}>
        <Label {...props} />
        <Component {...props} ref={ref} />
      </div>
    );
  });
  withLabelComponent.displayName = Component.displayName;
  return withLabelComponent;
};
