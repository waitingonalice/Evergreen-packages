import clsx from "clsx";
import { cn } from "../../utils/cn";
import { Text } from "../text";

export interface LinkProps {
  to: string;
  children: React.ReactNode;
  variant?: "errorLink" | "primaryLink";
  className?: string;
  disabled?: boolean;
}

export const Link = ({
  to,
  children,
  variant = "primaryLink",
  className,
  disabled,
}: LinkProps) => {
  const baseStyle = clsx(
    "whitespace-nowrap transition-all duration-100 flex justify-center items-center gap-x-1"
  );

  const variantMapper = {
    primaryLink: cn(
      "text-primary-main",
      !disabled && "hover:text-primary-dark"
    ),
    errorLink: cn(
      "text-error-main hover:text-error-dark",
      !disabled && "hover:text-error-dark"
    ),
  };

  return (
    <a
      {...(!disabled && { href: to })}
      className={clsx(baseStyle, variantMapper[variant], className)}
    >
      <Text type="body">{children}</Text>
    </a>
  );
};
