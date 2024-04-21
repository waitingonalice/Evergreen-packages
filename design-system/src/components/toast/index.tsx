import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { AlertCircle, CheckCircleIcon, XIcon } from "lucide-react";
import { cn } from "../../utils";
import { Animate } from "../animate";
import animateStyle from "../animate/animate.module.css";
import { Text } from "../text";

interface ToastInterface {
  variant: "success" | "warning" | "error";
  title: React.ReactNode;
  description?: React.ReactNode;
  onClose?: () => void;
  className?: string;
  show: boolean;
  duration?: number;
  position?:
    | "top-left"
    | "center"
    | "top-right"
    | "bottom-right"
    | "bottom-left";
  noDuration?: boolean;
}
const Toast = ({
  variant,
  title,
  description,
  className,
  onClose,
  show,
  duration = 5000,
  noDuration,
  position = "center",
}: ToastInterface) => {
  const [showToast, setShowToast] = useState<boolean>(show);

  useEffect(() => {
    setShowToast(show);
  }, [show]);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (showToast && !noDuration) {
      timer = setTimeout(() => {
        setShowToast(false);
        if (onClose) onClose();
      }, duration);
    }
    return () => clearTimeout(timer);
  }, [showToast]);

  const baseIconStyle = "h-5 w-5 shrink-0 mt-0.5";
  const positionMap: Record<NonNullable<ToastInterface["position"]>, string> = {
    center: "top-4 left-1/2 -translate-x-1/2 ",
    "top-left": "top-4 sm:left-4 left-0",
    "top-right": "top-4 sm:right-4 right-0",
    "bottom-right": "bottom-4 sm:right-4 right-0",
    "bottom-left": "bottom-4 sm:left-4 left-0",
  };

  const animateMap: Record<NonNullable<ToastInterface["position"]>, string> = {
    center: showToast
      ? cn(animateStyle.slideInCenter)
      : cn(animateStyle.slideOutCenter),
    "top-right": showToast
      ? "animate-in slide-in-from-right"
      : "translate-x-full",
    "top-left": showToast
      ? "animate-in slide-in-from-left"
      : "-translate-x-full",
    "bottom-right": showToast
      ? "animate-in slide-in-from-right"
      : "translate-x-full",
    "bottom-left": showToast
      ? "animate-in slide-in-from-left"
      : "-translate-x-full",
  };

  const toastIconMap: Record<ToastInterface["variant"], JSX.Element> = {
    success: (
      <CheckCircleIcon className={cn(baseIconStyle, "text-success-dark")} />
    ),
    warning: <AlertCircle className={cn(baseIconStyle, "text-warning-dark")} />,
    error: <AlertCircle className={cn(baseIconStyle, "text-error-dark")} />,
  };

  const handleClose = () => {
    setShowToast(false);
    if (onClose) onClose();
  };

  return (
    <Animate show={showToast}>
      <div
        className={cn(
          "sm:w-96 sm:p-4",
          "flex flex-col border rounded-md shadow-md p-2 w-full bg-white",
          "fixed z-[100]",
          "transition-all duration-150",
          positionMap[position],
          animateMap[position],
          className
        )}
      >
        <div className="flex items-start justify-between">
          <div className="flex gap-x-2">
            {toastIconMap[variant]}
            <Text type="subhead-2-bold">{title}</Text>
          </div>
          <XIcon
            role="button"
            tabIndex={0}
            className={baseIconStyle}
            onClick={handleClose}
          />
        </div>

        {description && (
          <div className="mt-1 mx-7">
            <Text type="body">{description}</Text>
          </div>
        )}
      </div>
    </Animate>
  );
};

type ReactKey = {
  key?: string | number;
};

export type ToastContextBaseProps = ReactKey & ToastInterface;
type RenderToastType = {
  renderToast: Dispatch<SetStateAction<ToastContextBaseProps>>;
};
type ToastContextProps = ToastContextBaseProps & RenderToastType;

const ToastContext = createContext({} as ToastContextProps);

const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  const [toast, setToast] = useState<ToastContextBaseProps>({
    key: "",
    show: false,
    variant: "success",
    title: "",
    description: "",
  });

  const value = useMemo(() => ({ ...toast, renderToast: setToast }), [toast]);

  return (
    <ToastContext.Provider value={value}>
      <Toast {...toast} />
      {children}
    </ToastContext.Provider>
  );
};

const useToast = () => useContext(ToastContext);

export { Toast, ToastProvider, useToast };
