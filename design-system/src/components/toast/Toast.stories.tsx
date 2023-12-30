import { Meta } from "@storybook/react";
import React from "react";
import { Button } from "../button";
import { Toaster, useToast } from ".";

type ToastType = typeof useToast;

const meta: Meta<ToastType> = {
  title: "Components/Toast",
  component: Toaster,
  argTypes: {
    title: {
      control: "text",
    },
    description: {
      control: "text",
    },
    variant: {
      control: "select",
      options: ["default", "success", "warning", "destructive"],
    },
    position: {
      control: "select",
      options: ["top", "bottom"],
    },
  },
};

export default meta;

export const Description = () => (
  <a
    className="text-blue-500 w-full flex items-center justify-center h-screen"
    href="https://www.npmjs.com/package/@radix-ui/react-toast"
  >
    This component uses @radix-ui/react-toast
  </a>
);

export const Demo = () => {
  const { renderToast } = useToast();
  const handleTriggerToast = () => {
    renderToast({
      title: "Toast title",
      description: "Toast description",
      position: "top",
    });
  };
  const handleTriggerToast1 = () => {
    renderToast({
      title: "Toast title",
      description: "Toast description",
      position: "bottom",
    });
  };
  const handleTriggerToast2 = () => {
    renderToast({
      title: "Toast title",
      description: "Toast description",
      variant: "success",
    });
  };
  const handleTriggerToast3 = () => {
    renderToast({
      title: "Toast title",
      description: "Toast description",
      variant: "warning",
    });
  };
  const handleTriggerToast4 = () => {
    renderToast({
      title: "Toast title",
      description: "Toast description",
      variant: "destructive",
    });
  };
  const handleTriggerToast5 = () => {
    renderToast({
      title: "Toast title",
      description: "Toast description",
      variant: "default",
      action: <Button size="small">Button</Button>,
    });
  };

  return (
    <div className="flex flex-col gap-y-2">
      <Button onClick={handleTriggerToast}>Trigger toast top</Button>
      <Button onClick={handleTriggerToast1}>Trigger toast bottom</Button>
      <Button onClick={handleTriggerToast2}>Trigger toast Success</Button>
      <Button onClick={handleTriggerToast3}>Trigger toast Warning</Button>
      <Button onClick={handleTriggerToast4}>Trigger toast Error</Button>
      <Button onClick={handleTriggerToast5}>Trigger toast With Action</Button>

      <Toaster />
    </div>
  );
};
