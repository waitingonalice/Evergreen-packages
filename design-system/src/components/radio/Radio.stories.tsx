import { Meta } from "@storybook/react";
import React, { useState } from "react";
import { Grid } from "../../utils/storybook/Grid";
import { Radio } from ".";

const meta: Meta<typeof Radio> = {
  title: "Components/Radio",
  component: Radio,
};
export default meta;

export const Demo = () => {
  const [value, setValue] = useState("");
  const handleOnChange = (value: string) => {
    setValue(value);
  };
  return (
    <Grid>
      <Radio
        selectedValue={value}
        value="1"
        onChange={handleOnChange}
        label="1"
      />
      <Radio
        selectedValue={value}
        value="2"
        onChange={handleOnChange}
        label="2"
      />
      <Radio
        disabled
        selectedValue={value}
        value="3"
        onChange={handleOnChange}
        label="3"
      />
    </Grid>
  );
};
