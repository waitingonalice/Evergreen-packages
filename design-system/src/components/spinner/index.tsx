import { cn } from "../../utils";
import style from "./spinner.module.css";

interface SpinnerProps {
  className?: string;
}

export const Spinner = ({ className }: SpinnerProps) => (
  <div className={cn(style.spinner, className)} />
);
