import { Loader } from "lucide-react";
import { cn } from "../../utils";
import style from "./spinner.module.css";

interface SpinnerProps {
  className?: string;
}

const Spinner = ({ className }: SpinnerProps) => (
  <div className={cn(style.spinner, className)} />
);

const SpinnerV2 = ({ className }: SpinnerProps) => (
  <Loader className={cn("animate-spin h-5 w-5 text-primary-main", className)} />
);

export { Spinner, SpinnerV2 };
