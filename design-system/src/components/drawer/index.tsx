/* eslint-disable react/no-array-index-key */
import * as SheetPrimitive from "@radix-ui/react-dialog";
import * as React from "react";
import { type VariantProps, cva } from "class-variance-authority";
import { X } from "lucide-react";
import { cn } from "../../utils";
import { Button, ButtonProps } from "../button";
import { Text } from "../text";

const Sheet = SheetPrimitive.Root;

const SheetPortal = SheetPrimitive.Portal;

const SheetOverlay = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Overlay
    className={cn(
      "fixed inset-0 z-50 bg-black/50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props}
    ref={ref}
  />
));
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName;

const sheetVariants = cva(
  "fixed z-50 gap-4 bg-white p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
  {
    variants: {
      direction: {
        top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom:
          "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-1/2 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
        right:
          "inset-y-0 right-0 h-full w-1/2  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm",
      },
    },
    defaultVariants: {
      direction: "right",
    },
  }
);

type SheetContentProps = React.ComponentPropsWithoutRef<
  typeof SheetPrimitive.Content
> &
  VariantProps<typeof sheetVariants> & { onClickClose: () => void };

const SheetContent = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Content>,
  SheetContentProps
>(({ direction, className, children, onClickClose, ...props }, ref) => (
  <SheetPortal>
    <SheetOverlay />
    <SheetPrimitive.Content
      ref={ref}
      className={cn(sheetVariants({ direction }), className)}
      {...props}
    >
      {children}
      <SheetPrimitive.Close
        onClick={onClickClose}
        className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-primary-main transition-opacity hover:opacity-100 focus:outline-none focus:ring-1 focus:ring-primary-main focus:ring-offset-2 disabled:pointer-events-none"
      >
        <X className="h-4 w-4" />
        <span className="sr-only">Close</span>
      </SheetPrimitive.Close>
    </SheetPrimitive.Content>
  </SheetPortal>
));
SheetContent.displayName = SheetPrimitive.Content.displayName;

const SheetHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn("flex flex-col space-y-2 sm:text-left", className)}
    {...props}
  />
);
SheetHeader.displayName = "SheetHeader";

const SheetFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    )}
    {...props}
  />
);
SheetFooter.displayName = "SheetFooter";

const SheetTitle = ({ children }: { children: React.ReactNode }) => (
  <Text type="subhead-2-bold" className="text-dark">
    {children}
  </Text>
);

const SheetDescription = ({ children }: { children: React.ReactNode }) => (
  <Text type="body" className="text-secondary-4">
    {children}
  </Text>
);

interface DrawerProps {
  actionButtons?: ButtonProps[];
  open?: boolean;
  title?: string;
  description?: string;
  content?: React.ReactNode;
  direction?: VariantProps<typeof sheetVariants>["direction"];
  onClose: () => void;
  className?: string;
}
export function Drawer({
  open,
  actionButtons,
  onClose,
  title,
  description,
  content,
  direction,
  className,
}: DrawerProps) {
  return (
    <Sheet open={open}>
      <SheetContent
        className={className}
        direction={direction}
        onInteractOutside={onClose}
        onClickClose={onClose}
      >
        <SheetHeader>
          <SheetTitle>{title}</SheetTitle>
          <SheetDescription>{description}</SheetDescription>
        </SheetHeader>
        <div className="my-4">{content}</div>
        <SheetFooter>
          {actionButtons?.map((button, index) => (
            <Button {...button} key={index} />
          ))}
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
