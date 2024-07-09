import React from "react";
import { useDelayUnmount } from "../../hooks";

export interface AnimateProps {
  show: boolean;
  timer?: number;
  children: React.ReactNode;
  className?: string;
}

function Animate({ children, show, className, timer = 100 }: AnimateProps) {
  const render = useDelayUnmount(show, timer);
  return render && <div className={className}>{children}</div>;
}

export { Animate };
