import { PrimitiveType } from "@waitingonalice/utilities";

export interface BaseProps {
  className?: string;
}

export interface BaseOption {
  label: string;
  value: PrimitiveType;
}
