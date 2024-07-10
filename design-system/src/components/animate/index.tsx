import React from "react";
import { useDelayUnmount } from "../../hooks";

export interface AnimateProps {
  show: boolean;
  timer?: number;
  children: React.ReactNode;
  className?: string;
  mountDelay?: boolean;
}

function Animate({
  children,
  show,
  className,
  mountDelay,
  timer = 100,
}: AnimateProps) {
  const render = useDelayUnmount(show, timer, mountDelay);
  return render && <div className={className}>{children}</div>;
}

export { Animate };
