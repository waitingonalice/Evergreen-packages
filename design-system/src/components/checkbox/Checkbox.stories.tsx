import { Meta } from "@storybook/react";
import React from "react";
import { Grid } from "../../utils/storybook/Grid";
import { Checkbox } from ".";

const meta: Meta<typeof Checkbox> = {
  title: "Components/Checkbox",
  component: Checkbox,
};
export default meta;

export const Component = () => (
  <Grid>
    Default
    <Checkbox />
    Checked
    <Checkbox checked />
    Indeterminate
    <Checkbox indeterminate />
    Disabled
    <Checkbox disabled />
    Disabled checked
    <Checkbox disabled checked />
    Disabled indeterminate
    <Checkbox disabled indeterminate />
  </Grid>
);
