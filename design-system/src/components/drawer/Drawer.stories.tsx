import { Meta } from "@storybook/react";
import React from "react";
import { Grid } from "../../utils/storybook/Grid";
import { Drawer } from ".";

const meta: Meta<typeof Drawer> = {
  title: "Components/Drawer",
  component: Drawer,
};
export default meta;

export const Component = () => (
  <Drawer
    trigger={{ children: "Open Drawer" }}
    title="This is the title"
    description="This is the description"
    content={<input className="w-full" />}
    actionButtons={[
      { children: "Cancel", variant: "secondary" },
      { children: "Save" },
    ]}
  />
);

export const DifferentDirections = () => (
  <Grid>
    Top
    <Drawer
      trigger={{ children: "Top" }}
      direction="top"
      title="This is the title"
      description="This is the description"
    />
    Bottom
    <Drawer
      trigger={{ children: "Bottom" }}
      direction="bottom"
      title="This is the title"
      description="This is the description"
    />
    Left
    <Drawer
      trigger={{ children: "Left" }}
      direction="left"
      title="This is the title"
      description="This is the description"
    />
    Right
    <Drawer
      trigger={{ children: "Right" }}
      direction="right"
      title="This is the title"
      description="This is the description"
    />
  </Grid>
);
