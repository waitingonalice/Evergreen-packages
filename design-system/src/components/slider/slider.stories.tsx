import { Meta } from "@storybook/react";
import React from "react";
import { Slider, SliderProps } from ".";

const meta: Meta<typeof Slider> = {
  title: "Components/Slider",
  component: Slider,
};
export default meta;

const Template = (args: SliderProps) => <Slider {...args} />;

export const Default = Template.bind({});
Default.args = {
  orientation: "horizontal",
  min: 0,
  max: 100,
  value: [50],
};

export const Vertical = Template.bind({});
Vertical.args = {
  className: "h-96",
  orientation: "vertical",
  min: 0,
  max: 100,
  value: [50],
};
