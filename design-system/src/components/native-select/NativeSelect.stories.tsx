import { Meta } from "@storybook/react";
import React from "react";
import { NativeSelect, NativeSelectProps } from ".";

const meta: Meta<typeof NativeSelect> = {
  title: "Components/NativeSelect",
  component: NativeSelect,
};
export default meta;

const Template = (args: NativeSelectProps) => <NativeSelect {...args} />;

export const Default = Template.bind({});
Default.args = {
  options: [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3" },
  ],
};

export const WithPlaceholder = Template.bind({});
WithPlaceholder.args = {
  ...Default.args,
  placeholder: "Select an option",
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true,
};

export const Small = Template.bind({});
Small.args = {
  ...Default.args,
  size: "small",
};

export const Error = Template.bind({});
Error.args = {
  ...Default.args,
  error: true,
};
