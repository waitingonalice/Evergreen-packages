import * as ToastPrimitives from "@radix-ui/react-toast";
import * as React from "react";
import { type VariantProps, cva } from "class-variance-authority";
import { X } from "lucide-react";
import { cn } from "../../utils";

const ToastProvider = ToastPrimitives.Provider;

const toastPositionVariants = cva("", {
  variants: {
    position: {
      top: "top-0 right-0",
      bottom: "bottom-0 right-0",
    },
  },
  defaultVariants: {
    position: "bottom",
  },
});

const ToastViewport = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Viewport>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport> &
    VariantProps<typeof toastPositionVariants>
>(({ className, position, ...props }, ref) => (
  <ToastPrimitives.Viewport
    ref={ref}
    className={cn(
      "fixed z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:flex-col md:max-w-[420px]",
      toastPositionVariants({ position }),
      className
    )}
    {...props}
  />
));
ToastViewport.displayName = ToastPrimitives.Viewport.displayName;

const toastStatusVariants = cva(
  "group pointer-events-auto relative flex items-center justify-between overflow-hidden rounded-md p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full",
  {
    variants: {
      variant: {
        default: "border bg-white text-dark",
        destructive: "bg-errorLight text-errorMain",
        success: "bg-successMain text-successTertiary",
        warning: "bg-warningMain text-warningTertiary",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const toastAnimationVariants = cva("", {
  variants: {
    position: {
      top: "data-[state=open]:slide-in-from-top-full",
      bottom: "data-[state=open]:slide-in-from-bottom-full",
    },
  },
  defaultVariants: {
    position: "bottom",
  },
});

const Toast = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root> &
    VariantProps<typeof toastStatusVariants> &
    VariantProps<typeof toastAnimationVariants>
>(({ className, variant, position, ...props }, ref) => (
  <ToastPrimitives.Root
    ref={ref}
    className={cn(
      "mb-2",
      toastStatusVariants({ variant }),
      toastAnimationVariants({ position }),
      className
    )}
    {...props}
  />
));
Toast.displayName = ToastPrimitives.Root.displayName;

const ToastAction = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Action>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Action>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Action ref={ref} className={cn(className)} {...props} />
));
ToastAction.displayName = ToastPrimitives.Action.displayName;

const ToastClose = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Close>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Close>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Close
    ref={ref}
    className={cn(
      "absolute right-2 top-2 rounded-md p-1 opacity-0 transition-opacity focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      className
    )}
    toast-close=""
    {...props}
  >
    <X className="h-4 w-4" />
  </ToastPrimitives.Close>
));
ToastClose.displayName = ToastPrimitives.Close.displayName;

type ToastProps = React.ComponentPropsWithoutRef<typeof Toast>;

type ToastActionElement = React.ReactElement<typeof ToastAction>;

export {
  type ToastProps,
  type ToastActionElement,
  ToastProvider,
  ToastViewport,
  Toast,
  ToastClose,
};
