import * as DialogPrimitive from "@radix-ui/react-dialog";
import * as React from "react";
import { X } from "lucide-react";
import { cn } from "../../utils";
import { Button } from "../button";
import { Text } from "../text";

const DialogWrapper = DialogPrimitive.Root;

const DialogPortal = DialogPrimitive.Portal;

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props}
  />
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;
DialogOverlay.propTypes = DialogPrimitive.Overlay.propTypes;

interface DialogContentProps
  extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content> {
  onClose?: () => void;
  disableInteractOutside?: boolean;
}
const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  DialogContentProps
>(({ className, children, disableInteractOutside, onClose, ...props }, ref) => {
  const handleClose = (event: Event) => {
    if (disableInteractOutside) {
      event.preventDefault();
      return;
    }
    onClose?.();
  };
  return (
    <DialogPortal>
      <DialogOverlay />
      <DialogPrimitive.Content
        {...props}
        ref={ref}
        className={cn(
          "fixed left-[50%] top-[50%] z-50 grid w-full translate-x-[-50%] translate-y-[-50%] gap-4 border p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg bg-white overflow-auto",
          "h-full w-full sm:h-fit sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl",
          className
        )}
        onInteractOutside={handleClose}
      >
        {children}
        {onClose && (
          <Button
            variant="primaryLink"
            onClick={onClose}
            className="absolute right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-primary-main focus:ring-offset-2 disabled:pointer-events-none"
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </Button>
        )}
      </DialogPrimitive.Content>
    </DialogPortal>
  );
});
DialogContent.displayName = DialogPrimitive.Content.displayName;

interface DialogFooterProps {
  children: React.ReactNode;
  className?: string;
}
const DialogFooter = ({ children, className }: DialogFooterProps) => (
  <span
    className={cn("flex flex-col gap-y-2 sm:flex-row items-center", className)}
  >
    {children}
  </span>
);

export interface DialogProps extends DialogContentProps {
  open: boolean;
  children?: React.ReactNode;
  leftFooterChildren?: React.ReactNode;
  rightFooterChildren?: React.ReactNode;
  title?: string;
  className?: string;
}
export const Dialog = ({
  children,
  leftFooterChildren,
  rightFooterChildren,
  disableInteractOutside,
  title,
  className,
  open = false,
  onClose,
}: DialogProps) => {
  const footerBaseStyle = "gap-x-4 flex w-full";
  return (
    <DialogWrapper open={open}>
      <DialogContent
        className={className}
        onClose={onClose}
        disableInteractOutside={disableInteractOutside}
      >
        <div className="flex flex-col space-y-4">
          <Text type="subhead-2-bold" className="text-secondary-5">
            {title}
          </Text>
          <div className="sm:max-h-[400px] overflow-auto px-1">{children}</div>
        </div>

        <DialogFooter>
          {leftFooterChildren && (
            <span className={cn(footerBaseStyle, "justify-start")}>
              {leftFooterChildren}
            </span>
          )}
          {rightFooterChildren && (
            <span className={cn(footerBaseStyle, "justify-end")}>
              {rightFooterChildren}
            </span>
          )}
        </DialogFooter>
      </DialogContent>
    </DialogWrapper>
  );
};
