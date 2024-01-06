import { Text } from "../text";
import {
  Toast,
  ToastClose,
  ToastIcon,
  ToastProvider,
  ToastViewport,
} from "./ToastProvider";
import { useToast } from "./useToast";

function Toaster() {
  const { toasts, position } = useToast();

  return (
    <ToastProvider>
      {toasts.map(
        ({ id, title, description, action, customIcon, ...props }) => (
          <Toast key={id} {...props}>
            <div className="flex gap-2">
              <ToastIcon variant={props.variant} customIcon={customIcon} />
              <div className="grid gap-1">
                {title && <Text type="body-bold">{title}</Text>}
                {description && <Text type="body">{description}</Text>}
              </div>
            </div>
            {action}
            <ToastClose />
          </Toast>
        )
      )}
      <ToastViewport position={position} />
    </ToastProvider>
  );
}

export { Toaster, useToast };
