import { Meta } from "@storybook/react";
import React, { useState } from "react";
import { Button } from "../button";
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
    <>
      <Button onClick={handleOpen}>Open Drawer</Button>
      <Drawer
        open={open}
        title="This is the title"
        description="This is the description"
        content={<input className="w-full" />}
        onClose={handleClose}
        actionButtons={[
          {
            children: "Cancel",
            variant: "secondary",
            onClick: handleClose,
          },
          { children: "Save", onClick: handleClose },
        ]}
      />
    </>
  );
};
