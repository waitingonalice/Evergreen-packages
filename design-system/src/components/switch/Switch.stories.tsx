import { Meta } from "@storybook/react";
import React from "react";
import { Grid } from "../../utils/storybook/Grid";
import { Switch } from ".";

const meta: Meta<typeof Switch> = {
  title: "Components/Switch",
  component: Switch,
};
export default meta;

const Template = (args) => (
  <Grid>
    Default
    <Switch {...args}>Button</Switch>
    Small
    <Switch {...args} size="small">
      Button
    </Switch>
  </Grid>
);

export const Default = Template.bind({});

export const Checked = Template.bind({});
Checked.args = { defaultChecked: true };

export const Disabled = Template.bind({});
Disabled.args = { disabled: true };

export const DisabledChecked = Template.bind({});
DisabledChecked.args = { disabled: true, defaultChecked: true };

export const WithLabel = Template.bind({});
WithLabel.args = {
  id: "switch",
  disabled: true,
  defaultChecked: true,
  label: "Label",
  subLabel: "Sublabel",
};
