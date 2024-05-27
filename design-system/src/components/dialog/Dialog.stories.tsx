import { Meta } from "@storybook/react";
import React, { useState } from "react";
import { Button } from "../button";
import { Dialog } from ".";

export default {
  title: "Components/Dialog",
  component: Dialog,
} as Meta;

export const TriggerDialog = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenDialog = () => {
    setIsOpen(true);
  };

  const handleCloseDialog = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Button onClick={handleOpenDialog}>Open Dialog</Button>
      <Dialog
        open={isOpen}
        title="Example Dialog"
        onClose={handleCloseDialog}
        withOverlay
        rightFooterChildren={
          <>
            <Button variant="primaryLink">Cancel</Button>
            <Button>Add</Button>
          </>
        }
      >
        test
      </Dialog>
    </>
  );
};
