import { Meta } from "@storybook/react";
import React, { useState } from "react";
import { Drawer } from ".";

const meta: Meta<typeof Drawer> = {
  title: "Components/Drawer",
  component: Drawer,
};
export default meta;

export const Component = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <Drawer
      open={open}
      title="This is the title"
      description="This is the description"
      content={<input className="w-full" />}
      onClose={handleClose}
      triggerButton={{
        children: "Open Drawer",
        onClick: handleOpen,
      }}
      actionButtons={[
        {
          children: "Cancel",
          variant: "secondary",
          onClick: handleClose,
        },
        { children: "Save", onClick: handleClose },
      ]}
    />
  );
};
