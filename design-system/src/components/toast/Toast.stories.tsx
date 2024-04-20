import { Meta } from "@storybook/react";
import React from "react";
import { v4 as uuid } from "uuid";
import { Button } from "../button";
import { Toast, ToastProvider, useToast } from ".";

const meta: Meta<typeof Toast> = {
  title: "Components/Toast",
  component: Toast,
  decorators: [
    (StoryFn) => (
      <ToastProvider>
        <StoryFn />
      </ToastProvider>
    ),
  ],
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

export const Demo = () => {
  const { renderToast, ...rest } = useToast();
  const handleTriggerToast = () => {
    renderToast({
      ...rest,
      title: "Toast title",
      description: "Toast description",
      position: "top-left",
      show: true,
      key: uuid(),
      variant: "success",
    });
  };
  const handleTriggerToast1 = () => {
    renderToast({
      title: "Toast title",
      description: "Toast description",
      position: "top-right",
      show: true,
      key: uuid(),
      variant: "success",
    });
  };
  const handleTriggerToast2 = () => {
    renderToast({
      title: "Toast title",
      description: "Toast description",
      position: "bottom-left",
      show: true,
      key: uuid(),
      variant: "success",
    });
  };
  const handleTriggerToast3 = () => {
    renderToast({
      title: "Toast title",
      description: "Toast description",
      position: "bottom-right",
      show: true,
      key: uuid(),
      variant: "success",
    });
  };
  const handleTriggerToast4 = () => {
    renderToast({
      title: "Toast title",
      description: "Toast description",
      position: "center",
      show: true,
      key: uuid(),
      variant: "success",
    });
  };
  const handleTriggerToast5 = () => {
    renderToast({
      title: "Toast title",
      description: "Toast description",
      position: "center",
      show: true,
      key: uuid(),
      variant: "success",
    });
  };
  const handleTriggerToast6 = () => {
    renderToast({
      title: "Toast title",
      description: "Toast description",
      position: "center",
      show: true,
      key: uuid(),
      variant: "error",
    });
  };
  const handleTriggerToast7 = () => {
    renderToast({
      title: "Toast title",
      description: "Toast description",
      position: "center",
      show: true,
      key: uuid(),
      variant: "warning",
    });
  };

  return (
    <div className="flex flex-col gap-y-2">
      <Button onClick={handleTriggerToast}>Trigger toast top-left</Button>
      <Button onClick={handleTriggerToast1}>Trigger toast top-right</Button>
      <Button onClick={handleTriggerToast2}>Trigger toast bottom-left</Button>
      <Button onClick={handleTriggerToast3}>Trigger toast bottom-right</Button>
      <Button onClick={handleTriggerToast4}>Trigger toast center</Button>
      <Button onClick={handleTriggerToast5}>Trigger toast Success</Button>
      <Button onClick={handleTriggerToast6}>Trigger toast Warning</Button>
      <Button onClick={handleTriggerToast7}>Trigger toast Error</Button>
    </div>
  );
};
