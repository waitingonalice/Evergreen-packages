import { Text } from "../text";
import {
  Toast,
  ToastClose,
  ToastProvider,
  ToastViewport,
} from "./ToastProvider";
import { useToast } from "./useToast";

function Toaster() {
  const { toasts, position } = useToast();

  return (
    <ToastProvider>
      {toasts.map(({ id, title, description, action, ...props }) => (
        <Toast key={id} {...props}>
          <div className="grid gap-1">
            {title && <Text type="body-bold">{title}</Text>}
            {description && <Text type="body">{description}</Text>}
          </div>
          {action}
          <ToastClose />
        </Toast>
      ))}
      <ToastViewport position={position} />
    </ToastProvider>
  );
}

export { Toaster, useToast };
