import { Meta } from "@storybook/react";
import React from "react";
import { Grid } from "../../utils/storybook/Grid";
import { Button, ButtonProps } from ".";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
};
export default meta;

const Template = (args: ButtonProps) => (
  <Grid>
    Default
    <Button {...args}>Button</Button>
    Small
    <Button {...args} size="small">
      Button
    </Button>
  </Grid>
);

export const Primary = Template.bind({});
Primary.args = {
  variant: "primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: "secondary",
};

export const Error = Template.bind({});
Error.args = {
  variant: "error",
};

export const PrimaryLink = Template.bind({});
PrimaryLink.args = {
  variant: "primaryLink",
};

export const ErrorLink = Template.bind({});
ErrorLink.args = {
  variant: "errorLink",
};
