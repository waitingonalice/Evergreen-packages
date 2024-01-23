import { Meta } from "@storybook/react";
import React, { useEffect, useState } from "react";
import { ProgressBar } from ".";

const meta: Meta<typeof ProgressBar> = {
  title: "Components/ProgressBar",
  component: ProgressBar,
};
export default meta;

export const Component = () => <ProgressBar value={40} />;

export function ProgressDemo() {
  const [progress, setProgress] = useState(13);

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(66);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return <ProgressBar value={progress} />;
}
