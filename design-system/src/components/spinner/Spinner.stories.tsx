import { Meta } from "@storybook/react";
import React from "react";
import { Grid } from "../../utils/storybook/Grid";
import { Spinner, SpinnerV2 } from ".";

export default {
  title: "Components/Spinner",
  component: Spinner,
} as Meta;

export const Default = () => (
  <Grid>
    Spinner v1 <Spinner /> Spinner v2 <SpinnerV2 />
  </Grid>
);
