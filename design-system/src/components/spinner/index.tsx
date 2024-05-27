import { Loader } from "lucide-react";
import { cn } from "../../utils";
import style from "./spinner.module.css";

interface SpinnerProps {
  className?: string;
}

const Spinner = ({ className }: SpinnerProps) => (
  <div className={cn(style.spinner, className)} />
);

interface SpinnerV2Props extends SpinnerProps {
  lightMode?: boolean;
}
const SpinnerV2 = ({ className, lightMode }: SpinnerV2Props) => (
  <Loader
    className={cn(
      "animate-spin h-5 w-5 text-primary-main",
      lightMode && "text-secondary-1",
      className
    )}
  />
);

export { Spinner, SpinnerV2 };
