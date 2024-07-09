import { useEffect, useState } from "react";

export const useDelayUnmount = (isMounted: boolean, delayTime: number) => {
  const [render, setRender] = useState(false);
  useEffect(() => {
    let timeout: NodeJS.Timeout | null = null;
    timeout = setTimeout(() => {
      setRender(isMounted);
    }, delayTime);
    return () => clearTimeout(timeout);
  }, [isMounted]);
  return render;
};
