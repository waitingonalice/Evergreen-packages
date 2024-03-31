/* eslint-disable arrow-body-style */
import * as SliderPrimitive from "@radix-ui/react-slider";
import * as React from "react";
import { cn } from "../../utils";

export type SliderProps = React.ComponentPropsWithoutRef<
  typeof SliderPrimitive.Root
>;

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  SliderProps
>(({ className, ...props }, ref) => {
  const isVertical = props.orientation === "vertical";

  return (
    <SliderPrimitive.Root
      ref={ref}
      className={cn(
        "relative flex touch-none select-none items-center",
        isVertical ? "flex-col h-full" : "w-full",
        className
      )}
      {...props}
    >
      <SliderPrimitive.Track
        className={cn(
          "relative h-3 w-full grow overflow-hidden rounded-full bg-secondary-1",
          isVertical && "h-full w-3"
        )}
      >
        <SliderPrimitive.Range
          className={cn(
            "absolute h-full bg-primary-main",
            isVertical && "w-full"
          )}
        />
      </SliderPrimitive.Track>
      <SliderPrimitive.Thumb className="block h-5 w-5 rounded-full border border-secondary-2 bg-secondary-2 shadow shadow-primary-dark transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50" />
    </SliderPrimitive.Root>
  );
});
Slider.displayName = SliderPrimitive.Root.displayName;
Slider.propTypes = SliderPrimitive.Root.propTypes;

export { Slider };
