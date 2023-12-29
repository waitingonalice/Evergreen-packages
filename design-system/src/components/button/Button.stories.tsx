import { Meta } from "@storybook/react";
import React from "react";
import { Button, ButtonProps } from ".";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
};
export default meta;

const Template = (args: ButtonProps) => <Button {...args}>Button</Button>;

export const Primary = Template.bind({});
Primary.args = {
  variant: "primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: "secondary",
};
