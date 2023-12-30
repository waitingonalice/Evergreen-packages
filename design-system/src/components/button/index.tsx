import clsx from "clsx";

export interface ButtonProps {
  className?: string;
  variant?: "errorLink" | "error" | "primary" | "primaryLink" | "secondary";
  disabled?: boolean;
  size?: "default" | "small";
  value?: string;
  id?: string;
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  prefixIcon?: React.ReactNode;
  suffixIcon?: React.ReactNode;
}

export const Button = ({
  id,
  value,
  onClick,
  children,
  disabled,
  variant = "primary",
  size = "default",
  className,
  prefixIcon,
  suffixIcon,
}: ButtonProps) => {
  const baseStyle =
    "whitespace-nowrap transition-all duration-100 disabled:cursor-not-allowed disabled:opacity-30 text-[14px] font-medium tracking-[0.0125em] flex justify-center items-center gap-x-1";

  const baseStyleButton = clsx(
    "first-letter:focus:outline-none shadow-sm rounded-md active:enabled:ring-2 active:enabled:ring-offset-1",
    size === "small" ? "px-2 py-1" : "px-4 py-2"
  );

  const variantMapper = {
    primary: clsx(
      "shadow-primary-light/40 bg-primary-main hover:enabled:bg-primary-light text-secondary-1 active:enabled:bg-primary-dark active:enabled:ring-primary-light",
      baseStyleButton
    ),
    secondary: clsx(
      "shadow-secondary-1/40 bg-secondary-1 text-primary-main hover:enabled:bg-gray-2 active:enabled:bg-gray-3 active:enabled:ring-primary-light",
      baseStyleButton
    ),
    error: clsx(
      "shadow-error-main/40 bg-error-dark text-secondary-1 hover:enabled:bg-error-dark/90 active:enabled:bg-error-main active:enabled:ring-error-main",
      baseStyleButton
    ),
    primaryLink:
      "hover:text-primary-dark text-primary-main active:enabled:text-primary-dark",

    errorLink:
      "text-error-main hover:text-error-dark active:enabled:text-error-dark",
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <button
      id={id}
      type="button"
      className={clsx(baseStyle, variantMapper[variant], className)}
      disabled={disabled}
      value={value}
      onClick={handleClick}
    >
      {prefixIcon}
      {children}
      {suffixIcon}
    </button>
  );
};
