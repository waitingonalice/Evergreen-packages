import { Meta } from "@storybook/react";
import React from "react";
import { Grid } from "../../utils/storybook/Grid";
import { Link, LinkProps } from ".";

const meta: Meta<typeof Link> = {
  title: "Components/Link",
  component: Link,
};
export default meta;

const Template = (args: LinkProps) => (
  <Grid>
    Default
    <Link {...args}>Link</Link>
  </Grid>
);

export const PrimaryLink = Template.bind({});
PrimaryLink.args = {
  variant: "primaryLink",
  to: "https://www.google.com",
};

export const ErrorLink = Template.bind({});
ErrorLink.args = {
  variant: "errorLink",
  to: "https://www.google.com",
};

export const DisabledLink = Template.bind({});
DisabledLink.args = {
  disabled: true,
};
